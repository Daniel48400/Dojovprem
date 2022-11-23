const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const port = process.env.PORT ||3000;

mongoose.connect('mongodb+srv://dojov3:DB3669DB3669@cluster0.yfazo2f.mongodb.net/?retryWrites=true&w=majority').then(()=> {console.log('connecte a mongoDB');});
// mongoose.connect('mongodb://localhost/SW_TODO').then(()=> {console.log('connecte a mongoDB');});
const app = express();

app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

app.use(express.urlencoded ({ extended: false}));
app.use(express.json());

const routesTodo = require('./routes/routes_todo');
 const routesEdit = require('./routes/routes_edit');
app.use('/', routesTodo);
app.use('/editer',routesEdit);





app.listen(port, () => console.log(`Serveur lancé sur le port 1535: ${port} .`));