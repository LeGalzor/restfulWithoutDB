const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

const PORT = 8080
const createServer = (port) => {
  app.listen(port || PORT);
  console.log(`server is running at: ${PORT}`)
  return app;
}

 module.exports.createServer = createServer
