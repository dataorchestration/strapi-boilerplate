import request from 'supertest';

describe('Health Check', () => {
  it('should return 200 for health endpoint', async () => {
    const response = await request(strapi.server.httpServer)
      .get('/_health')
      .expect(200);
    
    expect(response.body).toHaveProperty('status', 'ok');
  });

  it('should return API information', async () => {
    const response = await request(strapi.server.httpServer)
      .get('/api')
      .expect(200);
    
    expect(response.body).toBeDefined();
  });
});