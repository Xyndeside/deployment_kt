const express = require('express');
const pool = require('./db');

const app = express();
const PORT = 3000;

app.get('/get', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users LIMIT 1');

        if (!result.rows || result.rows.length === 0) {
            return res.json({ message: 'No users found' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.use(express.static('../client'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));