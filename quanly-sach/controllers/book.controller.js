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

exports.addBook = async (req, res, next )=>{

    let msg = '';
    if(req.method == 'POST') // viết hoa
    {
        console.log(req.body);
        //1. Tạo model
        let objBook = new md.bookModel();
        objBook.ten_sach = req.body.ten_sach;
        objBook.nam_xb =   req.body.nam_xb;

        try {
            let new_book = await objBook.save();
            console.log(new_book);
            msg = "Đã thêm thành công"; 
        } catch (error) {
            msg = error.message; 
        }        

    } 
    res.render('book/add-book', {msg: msg})
}

exports.editBook = async (req, res, next )=>{
    let msg = '';
    let id = req.params.id; 
    // lấy sp cần sửa
    let objBook = await md.bookModel.findById( id);

    if(req.method == 'POST') // viết hoa
    {
        console.log(req.body);
        //1. Tạo model
        objBook = new md.bookModel();
        objBook.ten_sach = req.body.ten_sach;
        objBook.nam_xb =   req.body.nam_xb;
        objBook._id = id; // thêm dòng này để sửa


        try {
            // let new_book = await objBook.save();
            // console.log(new_book);

            await md.bookModel.findByIdAndUpdate(id, objBook);

            msg = "Đã Sửa thành công"; 
        } catch (error) {
            msg = error.message; 
        }        

    } 


    res.render('book/edit-book', { msg: msg, objBook: objBook })
}

exports.deleteBook = async (req, res, next )=>{
    let msg = '';
    let id = req.params.id; 
    // lấy sp cần sửa
    let objBook = await md.bookModel.findById( id);
    if(objBook == null)
        {
            msg = "không tồn tại sách ";
            res.render('book/delete', { msg: msg })
        }

        if(req.method =='POST'){
            try {
                await md.bookModel.findByIdAndDelete(id);
                // chuyển trang
                res.redirect('/books');
            } catch (error) {
                msg = error.message;
            }
        }


    res.render('book/delete', { msg: msg, objBook: objBook })
}