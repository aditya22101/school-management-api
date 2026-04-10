const pool = require('../config/db');
const { calculateDistance } = require('../utils/distance');

/**
 * Add a new school to the database
 */
exports.addSchool = async (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    // Validation
    if (!name || !address || latitude === undefined || longitude === undefined) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    if (typeof name !== 'string' || typeof address !== 'string' || isNaN(latitude) || isNaN(longitude)) {
        return res.status(400).json({ error: 'Invalid data types for input fields.' });
    }

    try {
        const [result] = await pool.execute(
            'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
            [name, address, parseFloat(latitude), parseFloat(longitude)]
        );
        res.status(201).json({ message: 'School added successfully!', schoolId: result.insertId });
    } catch (error) {
        console.error('Error adding school:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

/**
 * List schools sorted by proximity to user location
 */
exports.listSchools = async (req, res) => {
    const { latitude, longitude } = req.query;

    if (latitude === undefined || longitude === undefined) {
        return res.status(400).json({ error: 'User latitude and longitude are required.' });
    }

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    if (isNaN(userLat) || isNaN(userLon)) {
        return res.status(400).json({ error: 'Invalid latitude or longitude.' });
    }

    try {
        const [schools] = await pool.execute('SELECT * FROM schools');

        // Calculate distance and add to school objects
        const schoolsWithDistance = schools.map(school => {
            const distance = calculateDistance(userLat, userLon, school.latitude, school.longitude);
            return { ...school, distance };
        });

        // Sort by distance
        schoolsWithDistance.sort((a, b) => a.distance - b.distance);

        res.json(schoolsWithDistance);
    } catch (error) {
        console.error('Error fetching schools:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
