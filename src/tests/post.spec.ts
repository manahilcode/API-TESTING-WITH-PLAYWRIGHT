// tests/userTest.spec.js
import { test, expect, request } from '@playwright/test';
import { secrets } from '../config/secrets.js';

test('Simulate adding user to existing user list', async ({ request }) => {

  // 1. GET existing users
  const getResponse = await request.get(`${secrets.baseUrl}${secrets.endpoints.getUsers}`, {
    headers: {
      'x-api-key': secrets.apiKey           //in progress (Will do that)
    }
  });
  expect(getResponse.status()).toBe(200);

  const usersList = await getResponse.json();
  console.log('👥 Existing users:', usersList.data.length);

  // 2. POST new user
  const newUser = {
    name: 'John Doe',
    job: 'Developer'                // in progress (Will do that + Math.fllor)
  };

  const postResponse = await request.post(`${secrets.baseUrl}${secrets.endpoints.addUser}`, {
    headers: secrets.headers,
    data: newUser
  });

  expect(postResponse.status()).toBe(201);

  const createdUser = await postResponse.json();
  console.log('✅ New user created:', createdUser);

  // 3. Re-fetch users (simulating confirmation step)
  const getResponseAfter = await request.get(`${secrets.baseUrl}${secrets.endpoints.getUsers}`, {
    headers: {
      'x-api-key': secrets.apiKey
    }
  });
  expect(getResponseAfter.status()).toBe(200);

  const updatedUsersList = await getResponseAfter.json();
  console.log('🔁 Users after POST:', updatedUsersList.data.length);
});
