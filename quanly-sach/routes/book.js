var express = require('express');
var router = express.Router();
var bookCtrl = require('../controllers/book.controller')
// vị trí viết route ở đây

router.get('/', bookCtrl.listBook );

router.get('/add', bookCtrl.addBook );

router.get('/edit', bookCtrl.editBook );

router.get('/delete', bookCtrl.deleteBook );

module.exports = router;