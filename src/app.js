const express = require('express');
const ejs = require('ejs');
const path = require('path');
const morgan = require('morgan');
const app = express();

//importing routes
const animeRoute = require('./routes/animeRoute');

//setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
console.log("pinto es mk123")
//middlewares
app.use(morgan('dev'));
/*
app.use(myConnection(mysql, {
    host: 'ec2-35-173-249-76.compute-1.amazonaws.com',
    user: 'youl',
    password: 'youl123',
    port: 3306,
    database: 'Productos'
}, 'single'));
*/

app.use(express.urlencoded({extended: false}));

//routes
app.use('/', animeRoute);
//res.sendFile(path.resolve(__dirname,'index.html'));

// static files
//app.get('/public/css/styles.css', css );
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})