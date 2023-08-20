import express from 'express';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json()); // Parse JSON request bodies

const name = "ruth"
const descriptions = "hi there and thanks for getting here"

const nameFromUser = ""


app.get('/name', (req, res) => {
    res.send({name})
})
app.get('/descriptions', (req, res) => {
    res.send({descriptions})
})

app.post('/userPrompt', (req, res)=>{
    const {nameFromUser} = req.body
    res.send({nameFromUser})
})


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});