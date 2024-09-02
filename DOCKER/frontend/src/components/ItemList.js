import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/items")
      .then((response) => setItems(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/items/${id}`)
      .then(() => setItems(items.filter((item) => item.id !== id)))
      .catch((error) => console.error("Error deleting item:", error));
  };

  return (
    // <div className="container mt-5">
    //   <h2 className="mb-4">Items</h2>
    //   <Link to="/add" className="btn btn-primary mb-3">
    //     Add New Item
    //   </Link>
    //   <ul className="list-group">
    //     {items.map((item) => (
    //       <li
    //         key={item.id}
    //         className="list-group-item d-flex justify-content-between align-items-center"
    //       >
    //         <span>
    //           {item.name} - {item.description}
    //         </span>
    //         <div>
    //           <Link
    //             to={`/update/${item.id}`}
    //             className="btn btn-warning btn-sm me-2"
    //           >
    //             Edit
    //           </Link>
    //           <button
    //             onClick={() => handleDelete(item.id)}
    //             className="btn btn-danger btn-sm"
    //           >
    //             Delete
    //           </button>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Items List</h2>
      <Link to="/add" className="btn btn-dark mb-3">
        Add New Item
      </Link>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td className="text-center">
                <Link
                  to={`/update/${item.id}`}
                  className="btn btn-warning btn-sm me-2"
                  style={{ backgroundColor: "#ffc107", color: "#000" }}
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemList;
