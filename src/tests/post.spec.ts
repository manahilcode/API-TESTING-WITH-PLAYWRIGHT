// tests/userTest.spec.js
import { test, expect, request } from '@playwright/test';
import { secrets } from '../config/secrets.js';

test('Simulate adding user to existing user list', async ({ request }) => {

  // 1. GET existing users
  const getResponse = await request.get(`${secrets.baseUrl}${secrets.endpoints.getUsers}`, {
  headers: secrets.headers

  });
  expect(getResponse.status()).toBe(200);

  const usersList = await getResponse.json();
  console.log('👥 Existing users:', usersList.data.length);

  // 2. POST new user from secrets
  const postResponse = await request.post(`${secrets.baseUrl}${secrets.endpoints.addUser}`, {
    headers: secrets.headers,
    data: secrets.newUserData
  });

  expect(postResponse.status()).toBe(201);

  const createdUser = await postResponse.json();
  console.log('✅ New user created:', createdUser);

  // 3. Re-fetch users
  const getResponseAfter = await request.get(`${secrets.baseUrl}${secrets.endpoints.getUsers}`, {
    headers: secrets.headers

  });
  expect(getResponseAfter.status()).toBe(200);

  const updatedUsersList = await getResponseAfter.json();
  console.log('🔁 Users after POST:', updatedUsersList.data.length);
});
