require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const config = require('./src/config/config');

// Middleware
const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Database 
mongoose.Promise = global.Promise;
mongoose.set('debug', config.IS_PRODUCTION)
mongoose.connect(config.MONGO_URL);
let db = mongoose.connection;

db.on('open', () => {
  console.log('Connected to the database.');
});

db.on('error', (err) => {
  console.log(`Database error: ${err}`, config.MONGO_URL);
});

// Routes
app.use("/api", require('./src/routes'));

// Server Run Test
// app.get('/', (req, res) => {
//   res.send("server working fine!");
// })

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

// Run Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});