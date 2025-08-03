import request from 'supertest';

describe('Authentication', () => {
  let jwt: string;
  let userId: string;

  it('should register a new user', async () => {
    const userData = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
    };

    const response = await request(strapi.server.httpServer)
      .post('/api/auth/local/register')
      .send(userData)
      .expect(200);

    expect(response.body.jwt).toBeDefined();
    expect(response.body.user).toBeDefined();
    expect(response.body.user.email).toBe(userData.email);
    
    jwt = response.body.jwt;
    userId = response.body.user.id;
  });

  it('should login with valid credentials', async () => {
    const loginData = {
      identifier: 'test@example.com',
      password: 'password123',
    };

    const response = await request(strapi.server.httpServer)
      .post('/api/auth/local')
      .send(loginData)
      .expect(200);

    expect(response.body.jwt).toBeDefined();
    expect(response.body.user).toBeDefined();
  });

  it('should access protected route with valid JWT', async () => {
    const response = await request(strapi.server.httpServer)
      .get('/api/users/me')
      .set('Authorization', `Bearer ${jwt}`)
      .expect(200);

    expect(response.body.id).toBe(userId);
  });

  it('should reject access without JWT', async () => {
    await request(strapi.server.httpServer)
      .get('/api/users/me')
      .expect(401);
  });
});