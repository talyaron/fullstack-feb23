import express from "express"
import { createBook, deleteBook, getAllBooks, updateBook } from "./booksControl"

const router = express.Router()


// /api/v1/books
router
    .get("", getAllBooks) // <-- ALL
    .get("/filter", getAllBooks) // <-- ALL
    .post("", createBook)
    .patch("/:bookId", updateBook)
    .delete("/:bookId", deleteBook)

// .post("", () => {}) // <-- add object
// .put("/:id", () => {}) // <-- update more than one field by ID
// .patch("/:id", () => {}) // <-- update 1 field by ID
// .delete("/:id", () => {}) // delete by ID


export default router