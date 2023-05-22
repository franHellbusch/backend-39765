const express = require("express");
const { Server: HttpServer } = require("http");
const router = require("./routes");
const viewsRouter = require("./routes/public/views.routes");
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();

const app = express();
const http = new HttpServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "src/views");
app.set("view engine", "ejs");
app.use("/static", express.static("src/views/js"));
app.use("/api", router);
app.use("/", viewsRouter);

app.use(errorHandler);

module.exports = http;
