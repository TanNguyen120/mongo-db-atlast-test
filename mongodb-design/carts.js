
var mongoose = require('mongoose');var Schema = mongoose.Schema;var carts = new Schema({user_id: {type: Number},items: [{
product_id: {type: Schema.Types.ObjectId},quantity: {type: Number},product_comb_id: {type: Schema.Types.ObjectId}}],total: [{type: Number}]}); 