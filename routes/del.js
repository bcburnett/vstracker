var express = require('express');
var router = express.Router({mergeParams: true});
const ObjectID = require('mongodb').ObjectID

/* GET home page. */
router.delete('/', function(req, res, next) {
  console.log( req.params.id)
  const query = {_id: ObjectID(req.params.id)}
    Todos.deleteOne(query, (err, response)=>{
        if(err){
            return console.log(err)
        }
        console.log('todo removed')
        res.send(200)
    })
  
})

module.exports = router;