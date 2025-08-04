
export const secrets = {
  baseUrl: 'https://reqres.in',
  apiKey: 'reqres-free-v1',
  headers: {
    'x-api-key': 'reqres-free-v1',
    'Content-Type': 'application/json'
  },
  endpoints: {
    getUsers: '/api/users?page=1',
    fetchUsers: '/api/users',
    addUser: '/api/users',
    UpdateUser:'/api/users/1',
  },
    sampleUserData: {
    name: 'Jane Doe (Auto - Update) ' + Math.floor(Math.random() * 100)
,
    job: 'Designer (Auto - Update) ' + Math.floor(Math.random() * 100)
  }
};
