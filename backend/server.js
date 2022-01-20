const express = require('express');
const app = express();
const routes = require('./src/routes/routes');
const dbconn = require('./src/database/connectionDB');
const bodyParser = require('body-parser');
var cors = require('cors')


try{
    app.use(cors())
    dbconn();
    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());
    app.use('/', routes)

    app.listen(3001, ()=>{
        console.log('API Rodando porta 3001')
    });

}catch(err){
    console.log("Não conectado " + err)
}

