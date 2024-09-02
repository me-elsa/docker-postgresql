const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "docker-postgres-1",
  database: "crudapp",
  password: "03017158007",
  port: 5432,
});
// Testing
const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log("Database connected successfully");
    client.release();
  } catch (err) {
    console.error("Database connection error:", err.message);
  }
};
testConnection();

module.exports = pool;
