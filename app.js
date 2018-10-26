const express = require('express');
const path = require('path');
const favicon = require('static-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient

const routes = require('./routes/index');
const users = require('./routes/users');
const add = require('./routes/add')
const del = require('./routes/del')
const edit = require('./routes/edit')

const app = express();
const url = 'mongodb://localhost:27017/todoapp'
// const url = 'mongodb://bcburnett:peachpie01@ds033086.mlab.com:33086/todoapp'
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoClient.connect( url , { useNewUrlParser: true },(err,database)=>{
    if(!err) {console.log("mongo connected" + toString(database))} else{
        throw err
    }
    db = database.db('todoapp')
    Todos = db.collection('tracker')

    var server = app.listen(app.get('port'), function() {
        console.log('Express server listening on port ' + server.address().port);
      });

})

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
app.use('/', routes);
app.use('/users', users);
app.use('/add', add)
app.use('/delete/:id', del)
app.use('/edit/:id',edit)



/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
