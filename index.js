const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static('public'));


app.listen(8081, function(){
    console.log(`Servidor rodando na url http://localhost:8081`)
});