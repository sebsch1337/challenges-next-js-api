import {
  createUser,
  deleteUser,
  getAllUsers,
} from '../../../services/userService';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const data = await getAllUsers();
    return response.status(200).json(data);
  }

  if (request.method === 'POST') {
    const data = JSON.parse(request.body);
    try {
      const newUser = await createUser(data.name, data.gender, data.email);
      return response.status(201).json(newUser);
    } catch (err) {
      return response
        .status(400)
        .json({message: 'Error: Can not create user.'});
    }
  }

  res.status(403).json({message: 'Error: request method not allowed.'});
}
