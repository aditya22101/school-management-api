# School Management System API (MVC)

A modular Node.js and Express-based API for managing schools and listing them based on geographical proximity using the Haversine formula.

##  Live API
https://school-management-api-jep7.onrender.com

##  Features
- Add school API
- List nearby schools API (distance-based)
- MySQL database integration
- Deployed on Render

##  Test API
POST /addSchool  
GET /listSchools?latitude=&longitude=


##  Project Structure
```
school-api/
├── config/
│   └── db.js           # Database connection pool
├── controllers/
│   └── schoolController.js # API logic for adding/listing schools
├── routes/
│   └── schoolRoutes.js     # API endpoint definitions
├── utils/
│   └── distance.js         # Haversine formula utility
├── public/
│   ├── index.html          # Modern Frontend UI
│   └── style.css           # Premium Styling
├── server.js               # Application entry point
├── schema.sql              # Database table setup
└── .env                    # Environment variables (private)
```

## Features
- **MVC Architecture**: Clean separation of concerns for better maintainability.
- **Add School**: Securely add schools with name, address, latitude, and longitude.
- **Proximity Search**: Get a list of schools sorted by distance using the **Haversine formula**.
- **Modern Frontend**: A clean, responsive UI with geolocation support.

## Setup Instructions

### 1. Database Setup (Railway)
1. Go to [Railway.app](https://railway.app/).
2. Create a MySQL database and find your **External Connection Strings**.
3. Run the SQL query in `schema.sql` to create the table.

### 2. Environment Configuration
Create a `.env` file and add your credentials:
```env
DB_HOST=your_railway_host
DB_USER=your_railway_user
DB_PASSWORD=your_railway_password
DB_NAME=your_railway_db
DB_PORT=your_railway_port
PORT=3000
```

### 3. Run the Application
```bash
npm install
npm run dev
```

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MySQL (Hosted on Railway)
- **Frontend**: HTML5, Vanilla CSS, JS (Fetch API)
