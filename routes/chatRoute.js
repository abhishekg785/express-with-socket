var express = require("express");
var router = express.Router();
var checkLogin = require('./checkLogin');

router.get('/',checkLogin,function(req,res){
  res.render('chat');
});

module.exports = router;
