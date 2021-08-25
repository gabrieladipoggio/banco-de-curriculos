const mongoose = require('mongoose');
const password = process.env.MONGODB_PASSWORD;


mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://root:${password}@bancos-de-curriculos.liizz.mongodb.net/cadastro?retryWrites=true&w=majority`, {
    useNewUrlParser: true 
}).then(()=>{
    console.log("MongoDB Conectado")
}).catch((err)=>{
    console.error("Houve um erro ao se conectar ao mongoDB" + err);
})

module.exports = {mongoose: mongoose};

