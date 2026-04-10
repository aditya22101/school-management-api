const express = require('express');
const cors = require('cors');
const schoolRoutes = require('./routes/schoolRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/', schoolRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`Database: ${process.env.DB_NAME} on ${process.env.DB_HOST}`);
});
