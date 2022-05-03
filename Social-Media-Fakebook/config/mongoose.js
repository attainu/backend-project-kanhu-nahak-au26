const mongoose = require('mongoose'); //requiring mongoose
mongoose.connect('mongodb://localhost/fakebook'); //connecting to the database

const db = 'mongodb+srv://fakebook:attainu@cluster0.8iwjv.mongodb.net/fakebook?retryWrites=true&w=majority'; //acquiring the connection
mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(() => {
    console.log('Succesfully connected to MongoDB!')
}).catch((err)=> console.log(`Error occured in connecting to MongoDB!`))
//if any error occured in connecting to mongodb
// db.on('error', console.error.bind(console, 'Error occured in connecting to MongoDB!'));

// //once mongodb is connected
// db.once('open', function(){
//     console.log('Succesfully connected to MongoDB!');
// });

module.exports = db;