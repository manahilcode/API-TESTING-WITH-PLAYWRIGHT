import { test, expect, request } from '@playwright/test';
import { secrets } from '../config/secrets';

test('PUT /api/users/1 - Update user', async ({ request }) => {
  const response = await request.put(`${secrets.baseUrl}${secrets.endpoints.UpdateUser}`, {
    headers: secrets.headers,
    data: secrets.sampleUserData
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log('Updated user:', body);

  expect(body).toHaveProperty('name', secrets.sampleUserData.name);
  expect(body).toHaveProperty('job', secrets.sampleUserData.job);
  expect(body).toHaveProperty('updatedAt');
});

