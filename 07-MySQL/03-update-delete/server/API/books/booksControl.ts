
import express from 'express';
import connection from '../../DB/database';

export async function getAllBooks(req: express.Request, res: express.Response) {
    try {
        const query = "SELECT * FROM books"
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                res.send({ ok: true, results })
            } catch (error) {
                console.log(error)
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error })
    }
}

export async function createBook(req: express.Request, res: express.Response) {
    try {
        // INSERT INTO `library`.`books` (`title`, `author`, `image_url`) VALUES ('harry potter', 'J K Rowling', 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81Fyh2mrw4L._AC_UF1000,1000_QL80_.jpg');

        const { title, author, imageURL } = req.body
        if (!title || !author || !imageURL) throw new Error("no data in FUNCTION createBook in FILE booksCtrl.ts")

        const query = `INSERT INTO books (title, author, image_url) VALUES ("${title}", '${author}', '${imageURL}');`;
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                res.send({ ok: true, results })
            } catch (error) {
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        res.status(500).send({ ok: false, error })
    }
}
export async function deleteBook(req: express.Request, res: express.Response) {
    try {
        const { bookId } = req.params

        const query = `DELETE FROM books WHERE (book_id = '${bookId}');`;
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                res.send({ ok: true, results })
            } catch (error) {
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        res.status(500).send({ ok: false, error })
    }
}
export async function findBookByName(req: express.Request, res: express.Response) {
    try {
        const { author } = req.query
        if (!author) throw new Error("no data in FUNCTION createBook in FILE booksCtrl.ts")

        const query = `SELECT * FROM books WHERE auther = '${author}';`;
        const query2 = `SELECT * FROM books WHERE auther LIKE '%${author}%';`;

        connection.query(query2, (err, results) => {
            try {
                if (err) throw err;
                res.send({ ok: true, results })
            } catch (error) {
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        res.status(500).send({ ok: false, error })
    }
}
export async function updateBook(req: express.Request, res: express.Response) {
    try {
        const { updateField, updateContent } = req.body
        const { bookId } = req.params
        if (!updateContent || !updateField) throw new Error("no data in FUNCTION createBook in FILE booksCtrl.ts")

        const query = `UPDATE books SET ${updateField} = "${updateContent}" WHERE (book_id = '${bookId}');`;
        console.log(query)
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                res.send({ ok: true, results })
            } catch (error) {
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        res.status(500).send({ ok: false, error })
    }
}

