const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Setting ENV variables
dotenv.config({ path: './config.env' });

const app = require('./app');

const DB_PASSWORD = process.env.DATABASE_PASSWORD;
const DB = process.env.DATABASE.replace('<PASSWORD>', DB_PASSWORD);

// Connect to mongoDB server
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('DB connection successful');
    const PORT = process.env.PORT || 3000;
    // 4) START SERVER
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });
  });
