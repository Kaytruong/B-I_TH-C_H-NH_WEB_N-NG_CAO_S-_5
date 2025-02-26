const mongoose = require('mongoose'); 
const productSchema = new mongoose. Schema({ 
    price: Number, 
    name: String, 
    description: String, 
    imageUrl: String 
}); 
module.exports = mongoose.model('Product', productSchema); 