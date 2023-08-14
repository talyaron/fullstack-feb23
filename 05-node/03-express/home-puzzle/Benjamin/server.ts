import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json()); // Parse JSON request bodies

let receivedData = ''; // Define a variable to store received data

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.post('/sendData', (req, res) => {
  receivedData = req.body.data; // Store received data
  res.json({ message: 'Data received successfully!' });
});

app.get('/siteName', (req, res) => {
    res.send({ name: receivedData }); // Send stored data
});
