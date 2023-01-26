const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userAddressSchema = new mongoose.Schema({
    houseNoAndStreet: String,
    area: String,
    district: String,
    stateName: String,
    postalCode: Number
});

const registrationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    address: {
        type: userAddressSchema,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    createdUsername: {
        type: String,
        required: true
    },
    createdPassword: {
        type: String,
        required: true
    }
});

// Password Hashing
registrationSchema.pre('save', function (next) {
    if (this.isModified('createdPassword')) {
        bcrypt.hash(this.createdPassword, 8, (err, hash) => {
            if (err) {
                return next(err);
            }

            this.createdPassword = hash;
            next();
        });
    }
});

// // Comparing passwords
registrationSchema.methods.comparePassword = async function (password) {
    if (!password) {
        throw new Error("Error. Password not specified for comparing.");
    }

    try {
        const result = await bcrypt.compare(password, this.createdPassword);
        return result;
    } catch (err) {
        console.error(`Error comparing password. >> ${err}`);
    }
};

// User checking
registrationSchema.statics.userExists = async function (givenUsername) {    //Didn't work when the async function was an arrow function (Why??)     [Arrow functions can't use 'this' keyword]
    if (!givenUsername) {
        throw new Error('Error. No username provided.');
    }

    try {
        const user = await this.findOne({ createdUsername: givenUsername });
        if (user) {
            return true;
        }
        return false;
    } catch (err) {
        console.error(`Error in existingUser function. >> ${err}`);

        return true;
    }
};

module.exports = mongoose.model('RegisteredUser', registrationSchema);