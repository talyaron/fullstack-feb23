import express from 'express'
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//static files
app.use(express.static('public'));

 const header = "Pepito"

//routes to get data from server
app.get('/title', (req, res) => {
    console.log('request to title')
    res.send({ title: header })
});

const desc = "lorem Ipsum"

//routes to get data from server
app.get('/info', (req, res) => {
    console.log('request to info')
    res.send({ info: desc })
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const sassMiddleware = require('node-sass-middleware');
const path = require('path');


app.use(
  sassMiddleware({
    src: path.join(__dirname, 'src', 'scss'), // Source directory of SCSS files
    dest: path.join(__dirname, 'public', 'css'), // Destination directory for compiled CSS
    debug: true,
    outputStyle: 'expanded', // Use 'expanded' during development
  })
);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// // Import the express in typescript file
// import express from 'express';

// // Initialize the express engine
// const app: express.Application = express();

// // Take a port 3000 for running server.
// const port: number = 3000;

// // Handling '/' Request
// app.get('/', (_req, _res) => {
// 	_res.send("TypeScript With Express");
// });

// // Server setup
// app.listen(port, () => {
// 	console.log(`TypeScript with Express
// 		http://localhost:${port}/`);
// });
