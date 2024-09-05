import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="text-center">CRUD Application</h1>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/add" element={<ItemForm />} />
          <Route path="/update/:id" element={<ItemForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
