function checkLogin(req,res,next){
  if(req.session.username){
    next();
  }
  else{
    res.redirect('/');
  }
}

module.exports = checkLogin;
