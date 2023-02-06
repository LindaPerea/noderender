const models = require('../models')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { cart_ecommerce } = require('../models');
require("dotenv").config();

const { user_ecommerce } =  models;
class AuthServices {
    static async register(newUser) {
        try {
            const result = await user_ecommerce.create(newUser);
            return result;
        } catch (error) {
            throw error;            
        }    }    
    static async login(credentials) {
        try {
            const { email, password } = credentials;
            const newUser = await user_ecommerce.findOne({ where: {email}});
            if (newUser) {
                const isValid = bcrypt.compareSync(password, newUser.password);    
                return isValid ? {isValid, newUser} : {isValid}       
            }
            return {isValid: false}            
        } catch (error) {
            throw error;
            
        }
    }    
    static genToken(data) {
        try {
            const token = jwt.sign(data, process.env.JWT_SECRET, {
                expiresIn: "10m",
                algorithm: "HS512"
            });
            return token;
        } catch (error) {
            throw error;
            
        }
    }
}

module.exports = AuthServices;