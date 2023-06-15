const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }, 
    email: {
        type: String,
        require: true
    },
    password: {
        type:String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    }
    
}, {
    timestamps: true
})

const adminModel = mongoose.model('admin', adminSchema)

module.exports = adminModel;