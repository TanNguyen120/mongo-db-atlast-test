
var mongoose = require('mongoose');var Schema = mongoose.Schema;var store = new Schema({store_name: {type: String},store_image: {type: String},store_owner_id: {type: Number},warehouses: [{
warehouse_name: {type: String},address: {type: String},manager_name: {type: String},manager_phone: {type: String},manager_email: {type: String}}],created_at: {type: Date},updated_at: {type: Date}}); 