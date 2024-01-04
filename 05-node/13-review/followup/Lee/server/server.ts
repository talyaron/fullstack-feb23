import express from "express";

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
