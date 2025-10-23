const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.PORT || 5050;

app.listen(port, '127.0.0.1', () => {
  console.log(`Server is running on ${port}`);
});
