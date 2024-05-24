const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});