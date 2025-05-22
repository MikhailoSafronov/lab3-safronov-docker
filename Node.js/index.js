const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  host: process.env.PGHOST || 'db',
  user: 'postgres',
  password: 'postgres',
  database: 'lab',
});

app.get('/', async (_req, res) => {
  const { rows } = await pool.query('SELECT NOW()');
  res.json(rows[0]);
});

app.listen(3000, () => {
  console.log('✅ Node.js app running on http://localhost:3000');
});
