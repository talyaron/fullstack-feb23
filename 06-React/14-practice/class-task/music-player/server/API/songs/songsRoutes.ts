import express from "express";
import { addSong, getSongById } from "./songsControler";

const songRouter = express.Router();

songRouter.get("/get-song/:id", getSongById).post("", addSong);

export default songRouter;
