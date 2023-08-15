import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

const title = 'My Farm'

app.get('/title', (req, res) => {
    console.log('request to title')
    res.send({ title: title })

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
