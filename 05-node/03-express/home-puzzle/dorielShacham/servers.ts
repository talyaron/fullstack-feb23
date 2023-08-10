import express from "express";
const app = express()
const port = process.env.PORT || 5052;

//get the html+ts files
app.use(express.static('public'));

const myName = "Doriel";
const age = 29;
//routes to get data from server
app.get('/firstName', (req: any, res: { send: (arg0: { firstName: string, age: number; }) => void; }) => {
    console.log('request to name')
    res.send({
        firstName: myName,
        age: age
    })
});

//close with a listener 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(myName + " " + age) //test getting info
  })