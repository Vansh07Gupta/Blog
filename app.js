require('dotenv').config();

const express = require('express');
const expressLayout = require(`express-ejs-layouts`);
const app = express();

const connectDB = require('./server/config/db');

const PORT = 5000 || process.env.PORT;

app.use(express.static('public'));
connectDB();
//Templating engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

app.use('/',require('./server/routes/main'))

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})
