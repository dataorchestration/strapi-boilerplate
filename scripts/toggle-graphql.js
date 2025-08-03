#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env');
const envExamplePath = path.join(__dirname, '..', '.env.example');

function updateEnvFile(filePath, enable) {
  if (!fs.existsSync(filePath)) {
    console.log(`File ${filePath} does not exist. Skipping.`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Update GRAPHQL_ENABLED
  const graphqlEnabledRegex = /^GRAPHQL_ENABLED=.*/m;
  const newGraphqlValue = `GRAPHQL_ENABLED=${enable}`;
  
  if (graphqlEnabledRegex.test(content)) {
    content = content.replace(graphqlEnabledRegex, newGraphqlValue);
  } else {
    // Add GRAPHQL_ENABLED if it doesn't exist
    content += `\n${newGraphqlValue}\n`;
  }

  // Update API_TYPE
  const apiTypeRegex = /^API_TYPE=.*/m;
  const newApiTypeValue = `API_TYPE=${enable ? 'graphql' : 'rest'}`;
  
  if (apiTypeRegex.test(content)) {
    content = content.replace(apiTypeRegex, newApiTypeValue);
  } else {
    // Add API_TYPE if it doesn't exist
    content += `${newApiTypeValue}\n`;
  }

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}

function main() {
  const args = process.argv.slice(2);
  const action = args[0];

  if (!action || !['enable', 'disable'].includes(action)) {
    console.log('Usage: node toggle-graphql.js [enable|disable]');
    console.log('');
    console.log('Examples:');
    console.log('  node scripts/toggle-graphql.js enable   # Enable GraphQL API');
    console.log('  node scripts/toggle-graphql.js disable  # Disable GraphQL API (use REST)');
    process.exit(1);
  }

  const enable = action === 'enable';
  
  console.log(`${enable ? 'Enabling' : 'Disabling'} GraphQL API...`);
  
  // Update .env file
  updateEnvFile(envPath, enable);
  
  console.log('');
  console.log(`GraphQL API ${enable ? 'enabled' : 'disabled'} successfully!`);
  console.log('');
  
  if (enable) {
    console.log('GraphQL endpoint will be available at: http://localhost:1337/graphql');
    console.log('GraphQL playground will be available in development mode.');
  } else {
    console.log('REST API endpoints will be used.');
  }
  
  console.log('');
  console.log('Please restart your Strapi server for changes to take effect.');
}

main();