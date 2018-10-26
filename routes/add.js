var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {

  const todo = {
    date: req.body.date,
    bp: req.body.bp,
    weight: req.body.weight,
    pulse: req.body.pulse,
    comment: req.body.comment
  }
  console.log(req.body.comment)

  Todos.insert(todo, (err,result)=>{
    if(err){
      return console.log(err)
    }
    console.log('todo added')
    res.redirect('/')
  })

})

module.exports = router;