import {getUserById, deleteUser} from '../../../services/userService';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    try {
      const data = await getUserById(request.query.id);
      return response.status(200).json(data);
    } catch (err) {
      return response.status(404).json({message: 'Error: user not found.'});
    }
  }

  if (request.method === 'DELETE') {
    try {
      const deletedUser = await deleteUser(request.query.id);
      return response
        .status(200)
        .json({message: 'Info: user deleted successfully.'});
    } catch (err) {
      return response.status(404).json({message: 'Error: user not found.'});
    }
  }

  res.status(403).json({message: 'Error: request method not allowed.'});
}
