module.exports = (req, res) => {
  const express = require('express');
  const cors = require('cors');
  const helloRoutes = require('./routes/hello.route');
  require('dotenv').config();

  const app = express();
  
  app.use(cors());
  app.use(express.json());
  app.use('/api/hello', helloRoutes);

  app.get('/', (req, res) => {
    res.json({ message: 'API is working!' });
  });

  app.get('/api', (req, res) => {
    res.json({ message: 'API is working!' });
  });

  return app(req, res);
};