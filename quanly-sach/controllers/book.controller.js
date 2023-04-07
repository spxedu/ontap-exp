var md = require('../models/book.model')
exports.listBook = async (req, res, next )=>{
    let msg = '';
    let ds = [];

    try {
        ds = await md.bookModel.find();
        msg = 'Lấy ds thành công';
        
    } catch (error) {
        msg = error.message; 
    } 

    res.render('book/list-book',  { msg: msg, listBook: ds     }    )
}

exports.addBook = (req, res, next )=>{

    res.render('book/add-book')
}

exports.editBook = (req, res, next )=>{

    res.render('book/edit-book')
}

exports.deleteBook = (req, res, next )=>{

    
}