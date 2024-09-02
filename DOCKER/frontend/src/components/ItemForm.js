import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ItemForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/items/${id}`)
        .then((response) => {
          setName(response.data.name);
          setDescription(response.data.description);
        })
        .catch((error) => console.error("Error fetching item:", error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, description };
    if (id) {
      axios
        .put(`http://localhost:5000/items/${id}`, item)
        .then(() => navigate("/"))
        .catch((error) => console.error("Error updating item:", error));
    } else {
      axios
        .post("http://localhost:5000/items", item)
        .then(() => navigate("/"))
        .catch((error) => console.error("Error creating item:", error));
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{id ? "Edit Item" : "Add Item"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default ItemForm;
