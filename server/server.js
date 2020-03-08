const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@cluster0-g7duc.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

const app = express()

var corsOptions = {
    origin: "http://localhost:8081"
};  
app.use(cors(corsOptions));
// const studentRouter = require('./routes/student.router')

// parse application/json
app.use(bodyParser.json())
// setupPassport = require('./app/setupPassport')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.send('home')
})

client.connect(err => {
    const cultivos = client.db("uranai-database").collection("cultivos");
    const predicciones = client.db("uranai-database").collection("predicciones");
    // perform actions on the collection object
    cultivos ? console.log("Database connected...") : console.log(err)

    app.get('/cultivos', function(req, res){
        cultivos.find({}).toArray((err, result)=> {
            if (err) throw err;  
            res.send(result)
        })
    })

    app.get('/predicciones/:mes/:anio', function(req, res){
        predicciones.findOne({
            "mes": req.params.mes,
            "anio": req.params.anio,
        }, function(err, result){
            if (err) throw err;
            res.send(result)
        })
    })

    app.get('/consulta', function(req, res){
        const resultado = 0
        var d = new Date();
        var mes = d.getMonth();
        var anio = d.getFullYear()
        // cultivo: tipo de cultivo
        const cultivo = req.body.cultivo ? req.body.cultivo : "no seleccionado"
        // anios: años de sembrar el mismo cultivo
        const anios = req.body.anios ? req.body.anios : 0
        // ubicacion: por default dolores
        
        predicciones.findOne({
            "mes": mes,
            "anio": anio,
        }, function(err, result){
            if (err){
                console.log("Data not found")
                throw err;
            } 
            // console.log(result.precipitacion)
            // res.send(result.precipitacion)
        })

        if (parseInt(anios) > 3){

        }
        res.send({cultivo, anios, mes, anio})

        
    })

    }
);
        
        
// const db = require("./config")
// const database = "uranai-database"

// db.connect(db.url, (err, database) => {
//     if (err) console.log(err)
//     // require("./routes/cultivos.router")(app);

// })

// require("./routes/cultivos.router")(app);


// require('./routes/cultivos.router')(app);

// start app
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

