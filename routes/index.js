var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/',function(req,res){
  var userInfo = req.body;
  if(userInfo.username != ''){
    var username = userInfo.username;
    req.session.username = username;
    res.redirect('/chat');
  }
  else{
    res.redirect('/');
  }
});

router.get('/logout',function(req,res){
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
