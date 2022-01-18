const express = require('express');
const path = require('path');
const dbObj = require('./database/conn');

const app = express()

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "public")));

// Members API routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/warehouses', require('./routes/api/warehouses'));

// Global error handling
// app.use(function (req, res) {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

const PORT = process.env.PORT || 5000; // Didn't include a .env file

// Connect to MongoDB
dbObj.connectToServer(function (err) {
    if (err) {
      console.error(err);
      process.exit();
    }

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  });
