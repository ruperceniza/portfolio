const express = require('express');
const cors = require('cors');
const helloRoutes = require('./routes/hello.route');
const webhookRoutes = require('./routes/webhook.route');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use('/api/hello', helloRoutes);
app.use('/api/webhook', webhookRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
