var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/abc',  (req, res, next) =>{
    res.send("Là abc")
})


module.exports = router;
