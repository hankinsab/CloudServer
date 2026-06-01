const express = require('express')
const app = express();

app.use(express.json());

const port = 8086;


app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log(`== Server is listening on port ${port}`);
});
