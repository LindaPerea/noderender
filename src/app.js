const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routerApi = require("./routes")  

const db = require('./utils/database');

db.sync({ force:false})
.then(()=>console.log('ok'))
.catch((error)=>console.log(error));



const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));



routerApi(app);

module.exports = app;