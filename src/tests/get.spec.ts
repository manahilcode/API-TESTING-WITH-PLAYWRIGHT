// playwright-api-test.spec.js
import { test, expect, request } from '@playwright/test';

test('GET /api/users - Fetch list of users with pagination', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users', {
    headers: {
      'x-api-key': 'reqres-free-v1'
    }
  });


  expect(response.status()).toBe(200);


  const data = await response.json();


  console.log(JSON.stringify(data, null, 2));


  expect(data).toHaveProperty('page');
  expect(data).toHaveProperty('data');
  expect(Array.isArray(data.data)).toBe(true);
});
