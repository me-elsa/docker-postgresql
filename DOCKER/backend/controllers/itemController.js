const pool = require("../config/db");

const CreateItem = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newItem = await pool.query(
      "INSERT INTO items (name, description) VALUES ($1, $2) RETURNING *",
      [name, description]
    );
    res.json(newItem.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const GetAllItem = async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM items");
    res.json(allItems.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const GetSingleItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await pool.query("SELECT * FROM items WHERE id = $1", [id]);

    if (item.rows.length === 0) {
      return res.status(404).send("Item not found");
    }

    res.json(item.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const UpdateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updatedItem = await pool.query(
      "UPDATE items SET name = $1, description = $2 WHERE id = $3 RETURNING *",
      [name, description, id]
    );
    res.json(updatedItem.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const DeleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM items WHERE id = $1", [id]);
    res.json({ message: "Item deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
module.exports = {
  CreateItem,
  DeleteItem,
  GetAllItem,
  GetSingleItem,
  UpdateItem,
};
