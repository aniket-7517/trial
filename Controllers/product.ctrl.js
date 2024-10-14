const productModel = require("../Models/product.model");
const productSrv = require("../Services/product.srv");

const productCtrl = {

    getAll : async (req, res) => {
        try {
            const products = await productSrv.getAll();
            if (products) {
                res.send({ data : products });
            }
        } catch(error) {
            console.log(error);
            res.send(error);
        }
    },

    getByID : async (req, res) => {
        try {
            const products = await productSrv.getByID(req.params.id);
            if (products) {
                res.send({ data : products });
            } else {
                res.send({ status : "ID does not exist" });
            }
        } catch(error) {
            console.log(error);
            res.send(error);
        }
    },

    add : async (req, res) => {
        try {
            const products = await productSrv.add(req.body.name);
            if (products) {
                res.send({ status : "Product already exist" });
            } else {
                const newProduct = new productModel(req.body);
                newProduct.save().then(addedProduct => {
                    res.send({ status : "Added Successfully" , data : addedProduct });
                })
            }
        } catch(error) {
            console.log(error);
            res.send(error);
        }
    },

    delete : async (req, res) => {
        try {
            const products = await productSrv.delete(req.params.id);
            if(products) {
                res.send({ status : "Deleted successfully" });
            } else {
                res.send({ status : "ID does not exist" });
            }

        } catch(error) {
            console.log(error);
            res.send(error);
        }
    }

}

module.exports = productCtrl;