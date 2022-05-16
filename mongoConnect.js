const mongoose = require('mongoose');




module.exports.connect = async () => {
    const uri = 'mongodb+srv://admin:admin@dacnpm-nhom3-taan.j3yxn.mongodb.net/tech-zone?retryWrites=true&w=majority'
    const connect = await mongoose.connect(uri);
    return connect
}

