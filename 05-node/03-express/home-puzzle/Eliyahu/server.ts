import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

const title = 'My Farm'

app.get('/title', (req, res) => {
    console.log('request to title')
    res.send({ title: title })

});

const description = 'Here you can see your animals at the farm'

app.get('/dscrpt', (req, res) => {
    console.log('request to description')
    res.send({ description: description })

});

const animal = 'lion'

app.post('/animal', (req, res) => {
    // console.log('request to animal')
    //     console.log('animal received')
    // console.log(req.body.animal)
    // console.log('request to animal')
   let data = req.body
    res.send('Data Received: ' + JSON.stringify(data));
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
