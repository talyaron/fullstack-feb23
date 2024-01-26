import express from "express";
import { addSong, getPlaylist, getSongById } from "./songsControler";

const songRouter = express.Router();

songRouter
  .get("/get-song/:id", getSongById)
  .post("", addSong)
  .get("/get-user-playlist/:id", getPlaylist);

export default songRouter;
