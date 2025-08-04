// tests/playwright-api-test.spec.ts
import { test, expect } from '@playwright/test';
import { secrets } from '../config/secrets'; // Adjust path as needed

test('GET /api/users - Fetch list of users with pagination', async ({ request }) => {
  const response = await request.get(`${secrets.baseUrl}${secrets.endpoints.fetchUsers}`, {
    headers: {
      'x-api-key': secrets.apiKey
    }
  });

  expect(response.status()).toBe(200);

  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));

  expect(data).toHaveProperty('page');
  expect(data).toHaveProperty('data');
  expect(Array.isArray(data.data)).toBe(true);
});
