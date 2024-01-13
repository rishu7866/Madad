const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    Fname: {
        type: String,
        require: true
    },
    Gender: {
        type: String,
        require: true
    },
    Mob: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    Pass: {
        type: String,
        require: true
    },
    Cpass: {
        type: String,
        require: true
    }
})



const User = mongoose.model('DONAR', userSchema);
module.exports = User;