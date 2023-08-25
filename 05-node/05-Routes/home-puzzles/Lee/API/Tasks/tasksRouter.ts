import express from 'express'
const router = express.router()

router.get('/get-tasks', (req, res) => {
    res.send({tasks})
})

export default router;