/* eslint-disable */
import sha1 from 'sha1';
import redisClient from '../utils/redis.mjs';
import dbClient from '../utils/db.mjs';

class UsersController {
  static async postNew(req, res) {
    const { email, password } = req.body;

    if (!email) {
      res.status(400).send({ error: 'Missing email' });
    }
    if (!password) {
      res.status(400).send({ error: 'Missing password' });
    }
    const emailExist = await dbClient.collection('users').findOne({ email });

    if (emailExist) {
      res.status(400).send({ error: 'Already exist' })
    }
    const sha1Pass = sha1(password);

    const insertStat = await dbClient.users.insertOne({
      email,
      password: sha1Pass,
    });

    const createdUser = {
      id: insertStat.insertedId,
      email,
    };

    await userQ.add({
      userId: insertStat.insertedId.toString(),
    });

    return res.status(201).send(createdUser);
  }
}

export default UsersController;
