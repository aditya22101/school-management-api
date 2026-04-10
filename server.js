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
    console.log(`🚀 Server is running!`);
    console.log(`👉 Access the frontend at: http://localhost:${PORT}`);
    console.log(`Connected to database: ${process.env.DB_NAME} on ${process.env.DB_HOST}`);
});
