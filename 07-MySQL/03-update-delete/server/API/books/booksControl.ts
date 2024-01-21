
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

export async function updateBook(req, res) {
    try {
        //UPDATE `library`.`books` SET `title` = 'Gili' WHERE (`book_id` = '2');
        const { bookId } = req.params;
        if (!bookId) throw new Error("No Id provided on updateBook");
        const { field, update } = req.body;
        if (!field || !update) throw new Error("No field or update provided on updateBook");
        const query = `UPDATE books SET ${field} = '${update}' WHERE (book_id = ${bookId});`;

        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                //@ts-ignore
                if (results.changedRows) {
                    const query2 = `SELECT * from books WHERE (book_id = ${bookId});`
                    connection.query(query2, (err2, results2) => {
                        try {
                            if (err2) throw err2;
                            res.send({ ok: true, results2 })
                        } catch (error) {
                            console.log(error)
                            res.status(500).send({ ok: false, error })
                        }
                    })
                } else {
                    res.send({ ok: true, results: "no changes found" })
                }
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

export async function findBookByName(req, res) {
    try {
        const {title} = req.query;
        if (!title) throw new Error("no title");

        // const query = `SELECT * FROM books WHERE title = "${title}";`;

        const query = `SELECT * FROM books WHERE title LIKE "${title}%"`

        connection.query(query, (err, results) => {
            try {
                if (err) throw err
                res.send({ok: true, results})
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

export async function deleteBook(req, res) {
    try {
        const {bookId} = req.params;
        if (!bookId) throw new Error("no Id")

        const query = `DELETE FROM books WHERE (book_id = ${bookId});`;

        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                //@ts-ignore
                if (results.affectedRows) {
                    res.send({ok: true, results})
                } else {
                    res.send({ok: true, results: "No rows were deleted"})
                }
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





















export async function deleteBook1(req: express.Request, res: express.Response) {
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
export async function findBookByName1(req: express.Request, res: express.Response) {
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
export async function updateBook1(req: express.Request, res: express.Response) {
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

