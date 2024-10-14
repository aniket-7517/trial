const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    name : { type : "String" },

    price : { type : "String" },

    imgSrc : { type : "String" },

    specifications : [{ type : "String" }],

}, { timestamps : true });

const productModel = mongoose.model('products', productSchema);

module.exports = productModel;