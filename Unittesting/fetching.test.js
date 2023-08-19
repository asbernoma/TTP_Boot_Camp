const axios = require('axios');
const getUserProfile = require('./getUserProfile');

jest.mock(axios);

test('fetches user profile from the API', async () => {
  // Setup
  const mockUser = { id: 1, name: 'John Doe' };
  axios.get.mockResolvedValue({ data: mockUser });

  // Exercise
  const user = await getUserProfile(1);

  // Verify
  expect(user).toEqual(mockUser);
  expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users/1');
});