var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var products = new Schema({
  name: { type: String },
  thumbnail: { type: String },
  short_description: { type: String },
  long_description: { type: String },
  properties: [
    {
      property_name: { type: String },
      value: { type: String },
    },
  ],
  variations: [
    {
      variation_name: { type: String },
      value: [],
    },
  ],
  category_id: { type: Schema.Types.ObjectId },
  discount_id: { type: Schema.Types.ObjectId },
  store_id: { type: Schema.Types.ObjectId },
  created_at: { type: Date },
  updated_at: { type: Date },
});
