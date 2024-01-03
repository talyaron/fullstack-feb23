import express from "express"
import { getAllBooks } from "./booksControl"

const router = express.Router()

router
    .get("", getAllBooks) // <-- ALL

// .post("", () => {}) // <-- add object
// .put("/:id", () => {}) // <-- update more than one field by ID
// .patch("/:id", () => {}) // <-- update 1 field by ID
// .delete("/:id", () => {}) // delete by ID


export default router