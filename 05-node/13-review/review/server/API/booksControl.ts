
import express from 'express';

export async function getAllBooks(req: express.Request, res: express.Response) {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error })
    }
}