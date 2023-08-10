import Express from "express";
const app = Express();
const port = process.env.PORT || 3000;
const myName = `Ziv`;
const titleH1 = `Hello ${myName}!`;
app.get(`/dinamicTitle`, (req, res) => res.send(titleH1));
console.log(`title request`);

console.log(`hey there!`);
app.listen(port, () => console.log(`Server is running on port ${port}`));
