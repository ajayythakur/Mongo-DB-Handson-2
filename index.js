const express = require('express');
const body = require("body-parser");
const route = require("./routes/employee");
const app = express();

app.use(body.json());
app.use(route);



app.listen(3001, () => {
    console.log("Server is  listening to Port 3001");
})