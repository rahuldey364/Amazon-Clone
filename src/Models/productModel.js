const mongoose = require('mongoose')



const productSchema = new mongoose.Schema(

    { 
        title: {type:String, require:true, unique:true,trim:true},
        description: {type:String, require:true, trim:true},
        price: {type:Number, require:true,trim:true},         //////------ valid number/decimal
        currencyId: {type:String, require:true},            //////---------, INR
        currencyFormat: {typr:String, require:true},                //////-----------, Rupee symbol
        isFreeShipping: {type:Boolean, default: false},
        productImage: {type:String, require:true,trim:true},  // s3 link
        style: {type:String,trim:true},
        availableSizes: {type:[String],  enum:["S", "XS","M","X", "L","XXL", "XL"]},           /////------at least one size,
        installments: {type:Number},
        deletedAt: {Date},              //////--------, when the document is deleted 
        isDeleted: {type:Boolean, default: false}
      },
    {timestamps:true}
);

module.exports = mongoose.model('Products',productSchema);