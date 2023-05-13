const express=require('express');
const app = express();
const db=require('./config/mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port=8000;

app.set('view engine', 'ejs');
app.set('views','./views');

app.use('/',require('./routes'));

app.listen(port,()=>{
    console.log(`server up and running on http://localhost:${port}/`)
});

