const mongo = require("mongoose");

const widgetSchema = mongo.Schema({
  widget:String,
  text:String,
  borderRadius:String
});

const Widget = mongo.model("widgets", widgetSchema);
module.exports = Widget;
