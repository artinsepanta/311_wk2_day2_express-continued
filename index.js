const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router()

const vehiclesController = require('../controllers/vehicles');
const commentsController = require('../controllers/comments');
const productsController = require('../controllers/products');
const contactsController = require('../controllers/contacts');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.use("/router/contacts");
app.use("/router/vehicles");
app.use("/router/comments");
app.use("/roter/products");














//Create one thing

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
