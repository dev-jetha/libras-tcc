const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("TCC LIBRAS FUNCIONANDO!");
});

app.listen(PORT, () => {
    console.log('SERVIDOR RODANDO NA PORTA ${PORT}');
})