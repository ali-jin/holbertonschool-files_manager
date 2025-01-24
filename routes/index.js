/* eslint-disable */
import express from 'express';
import AppController from '../controllers/AppController.js';
import UsersController from '../controllers/UsersController.js';
import AuthController from '../controllers/AuthController.js'

function controllerRouting(app) {
  const router = express.Router();
  app.use('/', router);

  router.get('/', (req, res) => {
    res.send('Hello World');
  });

  router.get('/status', (req, res) => {
    AppController.getStatus(req, res);
  });

  router.get('/stats', (req, res) => {
    AppController.getStats(req, res);
  });

  router.post('/users', (req, res) => {
    UsersController.postNew(req, res);
  });

  router.get('/connect', (req, res) => {
    AuthController.getConnect(req, res);
  });

  router.get('/disconnect', (req, res) => {
    AuthController.getDisconnect(req, res);
  });

  router.get('/users/me', (req, res) => {
    UserController.getMe(req, res);
  });
}

export default controllerRouting;
