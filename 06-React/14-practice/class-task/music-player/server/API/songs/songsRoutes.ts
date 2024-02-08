import express from "express";
import {
  addSong,
  getAllSong,
  getPlaylist,
  getSongById,
  removeSong,
} from "./songsControler";

const songRouter = express.Router();

songRouter
  .get("/get-song/:id", getSongById)
  .get("/get-all-songs", getAllSong)
  .post("/add-song", addSong)
  .post("/remove-song", removeSong)
  .get("/get-user-playlist/:id", getPlaylist);

export default songRouter;
