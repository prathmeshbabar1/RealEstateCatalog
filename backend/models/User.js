const mongoose = require('mongoose')

const { Schema } = mongoose;

const userSchema = new Schema({
    password: {
        type: String,
        required: true
    },
    ppdId: String,
    email: {
        type: String,
        required: true
    },
   
})

const User = mongoose.model('user', userSchema);

module.exports = User;