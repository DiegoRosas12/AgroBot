
module.exports = function(app, db) {
    app.get('/', function(req, res){
        res.send("en cultivos")
    })
}


// Create and Save a new Student
// exports.create = (req, res) => {
//     if (!req.body.nua) {
//         res.status(400).send({
//           message: "Content can not be empty!"
//         });
//         return;
//     }

//     const cultivo = {
//         nua : req.body.nua,
//         first_name : req.body.first_name,
//         last_name : req.body.last_name,
//         email : req.body.email,
//         phone : req.body.phone,
//         age : req.body.age,
//         gender_id : req.body.gender_id,
//         career_id : req.body.career_id,
//     }

//     Cultivo.insertOne(cultivo, (err, res) => {
//         if (err){
//             res.status(400).send({
//                 message: "Error insertando cultivo"
//             });
//             return;
//         };
//         console.log("Cultivo insertado")
//         db.close();
//     } )
// };

// // Retrieve all Students from the database.
// exports.findAll = (req, res) => {
//     Cultivo.find({}).toArray()
//     .then(data => {
//         res.send(data);
//         })
//         .catch(err => {
//         res.status(500).send({
//             message:
//             err.message || "Ocurrió un error al listar los cultivos"
//         });
//     });
// };
