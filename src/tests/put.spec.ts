import { test, expect, request } from '@playwright/test';

test('PUT /api/users/1 - Update user', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/1', {
    headers: {
      'x-api-key': 'reqres-free-v1',
      'Content-Type': 'application/json'
    },
    data: {
      name: 'Jane Doe',
      job: 'Designer'
    }
  });


  expect(response.status()).toBe(200);


  const body = await response.json();
  console.log('Updated user:', body);


  expect(body).toHaveProperty('name', 'Jane Doe');
  expect(body).toHaveProperty('job', 'Designer');
  expect(body).toHaveProperty('updatedAt');
});
