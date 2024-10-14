const express = require("express");
const productCtrl = require("../Controllers/product.ctrl");
const productValidator = require("../Validators/product.validator");

const router = express.Router();

router.get("/", productCtrl.getAll);
router.get("/:id", productCtrl.getByID);
router.post("/",productValidator, productCtrl.add);
router.delete("/:id", productCtrl.delete);


module.exports = router;