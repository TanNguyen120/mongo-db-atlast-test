const mongoose = require('mongoose');




module.exports.connect = async () => {
    const uri = 'mongodb+srv://taan:<1234>@dacnpm-nhom3-taan.j3yxn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    const connect = await mongoose.connect(uri);
    return connect
}

