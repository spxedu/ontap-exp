var express = require('express');
var router = express.Router();
var bookCtrl = require('../controllers/book.controller')
// vị trí viết route ở đây

router.get('/', bookCtrl.listBook );

router.get('/add', bookCtrl.addBook );
router.post('/add', bookCtrl.addBook );

router.get('/edit/:id', bookCtrl.editBook );
router.post('/edit/:id', bookCtrl.editBook );

router.get('/delete/:id', bookCtrl.deleteBook );
router.post('/delete/:id', bookCtrl.deleteBook );

module.exports = router;