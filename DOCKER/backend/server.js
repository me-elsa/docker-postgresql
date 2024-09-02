const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const itemRoute = require("./routes/itemRoutes.js");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/", itemRoute);
const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
