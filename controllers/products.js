const Product = require("../models/product");
// const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

//--- panduan -----
// const express = require("express")
// const router = express.Router()

// router.get('/',(req,res,next)=>{
//     req.body
// })
//--------------
exports.postAddProduct = (req, res, next) => {
  //   products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  //   const products = adminData.products;
  //   const products = Product.fetchAll();
  //   res.render("shop", {
  //     prods: products,
  //     pageTitle: "Shop",
  //     path: "/",
  //     hasProducts: products.length > 0,
  //     activeShop: true,
  //     productCSS: true,
  //   });
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
