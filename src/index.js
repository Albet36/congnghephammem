const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 1100;
const { engine } = require("express-handlebars");
const routes = require("./routes/routes");
const cookieParser = require('cookie-parser');
const methodOverride = require("method-override");
const db = require("./database/database");
const api = require("./app/api/api");

app.use(cookieParser());
require('dotenv').config()
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.set("views", path.join(__dirname, "resources\\views"));
app.use("*/login", express.static(path.join(__dirname, "public/login")));
app.use("*/plugins", express.static(path.join(__dirname, "public/plugins")));
app.use("*/css", express.static(path.join(__dirname, "public/dist/css")));
app.use("*/js", express.static(path.join(__dirname, "public/dist/js")));
app.use("*/img", express.static(path.join(__dirname, "public/dist/img")));
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
db.Connect();
api(app);
routes(app);
app.listen(port, console.log(`localhost:${port}`));