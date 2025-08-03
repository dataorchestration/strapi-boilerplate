import Strapi from '@strapi/strapi';

let instance: Strapi;

async function setupStrapi() {
  if (!instance) {
    instance = await Strapi({
      distDir: './dist',
    }).load();
  }
  return instance;
}

async function cleanupStrapi() {
  if (instance) {
    await instance.destroy();
    instance = undefined;
  }
}

beforeAll(async () => {
  await setupStrapi();
});

afterAll(async () => {
  await cleanupStrapi();
});

export { setupStrapi, cleanupStrapi };