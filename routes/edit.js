var express = require('express');
var router = express.Router({mergeParams: true});
const ObjectID = require('mongodb').ObjectID


router.get('/', function(req, res, next) {
console.log( req.params.id)
  const query = {_id: ObjectID(req.params.id)}
  Todos.find(query).next((err, todo)=>{
    if(err){
      return console.log(err)
    }
    console.log(todo)
    res.render('edit', { title: 'Todo App', 'todo': todo });
  })
})

router.post('/', function(req, res, next) {
  console.log( req.params.id)
  console.log( req.body.weight)
  console.log( req.body.comment)
  const query = {_id: ObjectID(req.params.id)}
  const todo = {
    bp: req.body.bp,
    weight: req.body.weight,
    pulse: req.body.pulse,
    comment: req.body.comment
  }
  Todos.updateOne(query,{$set:todo},(err, result)=>{
    if(err){
      return console.log(err)
    }
    console.log(result)
    res.redirect('/')
  })
})

module.exports = router;