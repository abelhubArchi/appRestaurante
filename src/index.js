const express =  require("express");
const app = express();
const port = 3000;
const morgan = require("morgan")

// Configura Morgan para registrar solicitudes HTTP
app.use(morgan('tiny'));

app.use(require("./routes/index.js"));

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.get('/abigail', (req, res) => {
    res.render("te amo abigail")
});


app.listen(port, ()=>{
    console.log("aplicacion escuchando en puerto "+ port);
});
