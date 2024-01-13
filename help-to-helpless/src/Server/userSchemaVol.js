const mongoose = require('mongoose');
const userSchemaVol = new mongoose.Schema({
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
    Country: {
        type: String,
        require: true
    },
    State: {
        type: String,
        require: true
    },
    City: {
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



const Volunteer = mongoose.model('VOLUNTEER', userSchemaVol);
module.exports = Volunteer;