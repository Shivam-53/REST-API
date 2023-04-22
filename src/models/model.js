const express = require("express");
const mongoose = require("mongoose")
const app = express();

const prodSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    Title: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true
    },
    Rating: {
        type: Number,
        required: true
    },
    Price: {
        type: Number,
        required: true
    }

})

const ProductSchema = new mongoose.model("newProduct", prodSchema);
module.exports = ProductSchema;