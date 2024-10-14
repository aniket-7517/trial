const productModel = require("../Models/product.model");

const productSrv = {

    getAll : () => {
        return productModel.find();
    },
 
    getByID : (id) => {
        return productModel.findById(id);
    },

    add : (name) => {
        return productModel.findOne({ name });
    },

    delete : (id) => {
        return productModel.findByIdAndDelete(id);
    }

}

module.exports = productSrv;