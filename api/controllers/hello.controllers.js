const helloController = (req, res) => {
  res.json({ message: 'Hello from API!' });
};

module.exports = {
  helloController
};