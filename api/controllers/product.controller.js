const Product = require('../models/product.model')
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require('../utils/apifeatures');

// Create Product -- Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {

    // req.body.user = req.user.id

    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product,
    });

})

//get all product
exports.getAllProducts = catchAsyncErrors(async (req, res) => {

    const resultPerPage = 5;
    const productsCount = await Product.countDocuments()



    const apiFeatures = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage)

    const products = await apiFeatures.query;
    res.status(201).json({
        success: true,
        products,
        productsCount
    });
})

// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({
        success: true,
        product,
    });
});


//update product -- admin
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidator: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product: product,
    })

})


// Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "product not found"
        })
    }


    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product Delete Successfully",
    });
})


