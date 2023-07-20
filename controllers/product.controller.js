const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// controllers/products.js
exports.product_create = async function (req, res) {
    try{
        let product = new Product(
            {
                name: req.body.name,
                price: req.body.price
            }
        );
        await product.save();
        res.send('Product Created Successfully');
    } catch (err) {
        res.send(err);
    }
};


exports.product_details = async function (req, res) {
    try{
        const product = await Product.findById(req.params.id);
        res.send(product);
    } catch (err) {
        res.send(err);
    }
};

exports.product_all = async function (req, res) {
    try{
        const products = await Product.find();
        res.send(products);
    } catch (err) {
        res.send(err);
    }
};

exports.product_update = async function (req, res) {
    try {
        Product.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.send('Product udpated.');
    } catch (err) {
        res.sedn(err);
    }
};
