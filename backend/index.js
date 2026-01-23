const express = require('express');
const cors = require('cors');
const helloRoutes = require('./routes/hello.route');
const webhookRoutes = require('./routes/webhook.route');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

// Webhook routes need raw body for signature verification
app.use('/api/webhook', express.raw({ type: 'application/json', limit: '10mb' }), webhookRoutes);

// For other routes, parse JSON normally
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api/hello', helloRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
