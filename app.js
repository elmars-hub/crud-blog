const express = require('express');
const morgan = require('morgan');

const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

if (process.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use('/api/v1/blogs', blogRoutes);
app.use('/api/v1/users', userRoutes);

module.exports = app;
