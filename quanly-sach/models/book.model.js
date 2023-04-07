const { model } = require('mongoose');
const db = require('./db');
const bookSchema = new db.mongoose.Schema(
    {
        ten_sach: { type: String, required: true},
        nam_xb: {type: Number}
    },{
        collection:'tb_sach'
    }
);
// tạo model sách
let bookModel = db.mongoose.model("bookModel", bookSchema  );

const nxbSchema = new db.mongoose.Schema(
        {
            ten_nxb: {type:String, required: true}
        },
        {
            collection:'tb_nxb'
        }
);
let nxbModel = db.mongoose.model("nxbModel", nxbSchema);

module.exports = {
    bookModel, 
    nxbModel
}