const joi = require("joi");

const productValidator = async (req, res, next) => {

    try {
        const productSchema = joi.object({
            name : joi.string().required(),
    
            price : joi.string().required(),
    
            imgSrc : joi.string().required(),
    
            specifications : joi.array().items(joi.string()).required()
        })
        await productSchema.validateAsync(req.body);
        next();

    } catch(error) {
        const errormsg = [];
        if (error.details) {
            error.details.forEach(obj => {
                errormsg.push(obj.message);
            })
            res.send(errormsg);
        } else {
            console.log(error);
            res.send(error);
        }
    }

}

module.exports = productValidator;