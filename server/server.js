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
      const predicciones = client.db("uranai-database").collection("prediccion");
      // perform actions on the collection object
      cultivos ? console.log("Database connected...") : console.log(err)
      
      app.get('/cultivos', function(req, res){
          cultivos.find({}).toArray((err, result)=> {
            if (err) throw err;  
            res.send(result)
        })
      })

      app.get('/predicciones', function(req, res){
            
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

