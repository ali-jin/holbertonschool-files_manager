import express from 'express';
import AppController from '../controllers/AppController.js';

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
}

export default controllerRouting;
