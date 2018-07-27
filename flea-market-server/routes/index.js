var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.post('/register',function(req, res){
//   const {username, password} = req.body
//   if(username === 'admin'){
//     res.send({code:1, msg:'user exists'})
//   }
//   else{
//     res.send({code:0, data:{id:'', username, password}})
//   }
// })

const md5 = require('blueimp-md5')
const UserModel = require('../db/models').UserModel
const filter = {password : 0}

//register router
router.post('./register', function(req, res){
  const {username, password, type} = req.body
  UserModel.findOne({username}, function (err, user) { 
    if(user) { 
      res.send({code: 1, msg: 'user exists'}) 
    } 
    else { 
      new UserModel({username, password: md5(password), type}).save(function (err, user) { 
        res.cookie('userid', user._id, {maxAge: 1000*60*60*24*7}) 
        res.send({code: 0, data: {_id: user._id, username, type}}) 
      })
    }
  })
})

//login router
router.post('/login', function (req, res) {
  const {username, password} = req.body
  UserModel.findOne({username, password: md5(password)}, filter, function (err, user){
    if(!user) {
      res.send({code: 1, msg: 'username and password not match'})
    } 
    else { 
      res.cookie('userid', user._id, {maxAge: 1000*60*60*24*7}) 
      res.send({code: 0, data: user}) 
    }
  })
})

module.exports = router;