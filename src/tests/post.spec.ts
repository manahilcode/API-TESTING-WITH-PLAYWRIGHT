import { test, expect, request } from '@playwright/test';

test('Simulate adding user to existing user list', async ({ request }) => {
 
  const getResponse = await request.get('https://reqres.in/api/users?page=1', {
    headers: {
      'x-api-key': 'reqres-free-v1'
    }
  });
  expect(getResponse.status()).toBe(200);
  const usersList = await getResponse.json();
  console.log('Existing users:', usersList.data.length);


  const newUser = {
    name: 'John Doe',
    job: 'Developer'
  };

  const postResponse = await request.post('https://reqres.in/api/users', {
    headers: {
      'x-api-key': 'reqres-free-v1',
      'Content-Type': 'application/json'
    },
    data: newUser
  });

  expect(postResponse.status()).toBe(201);
  const createdUser = await postResponse.json();
  console.log('New user created:', createdUser);

// (In real API) Re-fetch list to check if user added
  const getResponseAfter = await request.get('https://reqres.in/api/users?page=1');
  const updatedUsersList = await getResponseAfter.json();
  console.log('Users after POST:', updatedUsersList.data.length);

  
});
