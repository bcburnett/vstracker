var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Todos.find({}).toArray((err, todos)=>{
    if(err){
      return console.log(err)
    }
    console.log(todos)
    res.render('index', { title: 'Todo App', 'todos': todos });
  })
  
});

module.exports = router;
