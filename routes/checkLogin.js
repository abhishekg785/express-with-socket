/* simple module to check if user is logged in or not */
function checkLogin(req,res,next){
  if(req.session.username){
    next();
  }
  else{
    res.redirect('/');
  }
}

module.exports = checkLogin;
