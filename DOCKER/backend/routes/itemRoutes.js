const express = require("express");
const {
  CreateItem,
  DeleteItem,
  GetAllItem,
  GetSingleItem,
  UpdateItem,
} = require("../controllers/itemController.js");
const router = express.Router(); 
//get all item
router.get("/items", GetAllItem);
//get single item
router.get("/items/:id", GetSingleItem);
//create 
router.post("/items", CreateItem);
//update 
router.put("/items/:id", UpdateItem);
// delete 
router.delete("/items/:id", DeleteItem);

module.exports = router;
