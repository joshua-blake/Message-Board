const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Hey hunni",
    user: "Josh",
    added: new Date()
  }
];
var express = require('express');
const { NetworkAuthenticationRequire } = require('http-errors');
var router = express.Router();
function run(){alert("hyd")}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Message Board',
    lister: JSON.stringify(messages) 
});
});

router.get('/new', function(req, res, next) {
  res.render('new', { 
    title: 'Create New Message'
  });
});

router.post('/new', function(req, res, next){
  if(req.body.message == "" || req.body.user == "" || req.body.message == 'undefined' || req.body.user == 'undefined'){
    res.redirect("/new")
    console.log("Please fill in all fields");
  }
  else{
  messages.push('index',{
    title: 'Message Board',
    text: req.body.message,
    user: req.body.user,
    added: new Date
  })
  res.redirect("/")
  }
})


module.exports = router;
