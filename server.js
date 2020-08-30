const express = require ('express');
// Morgan middleware library to log server requests, and you used Express's built-in express.static middleware to serve static HTML files.
const morgan =require('morgan');
const bodyparser = require('body-parser');
const usersRouter = require('./route/usersRouters');

const hostname ='localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

app.use(bodyparser.json());
app.use('/users',usersRouter);


app.use(express.static(__dirname+'public'));


app.use((req,res) =>{
    console.log(req.header);
    res.statusCode=200;
    res.setHeader('Content-type', 'text/html');
    res.end(`<html><body><h1>this is an express server</h1></body></html>`);
});

app.listen(port, hostname, () =>{
    console.log(`server running at http://${hostname}:${port}`);
});