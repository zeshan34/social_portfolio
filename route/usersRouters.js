const express = require('express');
const bodyParser = require('body-parser');


const usersRouter = express.Router();

usersRouter.use(bodyParser.json());

usersRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end('list all users');
})

.post((req, res) => {
    res.end(`Will add Users: ${req.body.name} with description: ${req.body.description}`);
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /users');
})

.delete((req, res) => {
    res.end('Deleting all users');
})


module.exports = usersRouter;