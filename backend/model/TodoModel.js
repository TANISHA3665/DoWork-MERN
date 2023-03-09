const mongoose = require('mongoose');

const todoschema = new mongoose.Schema({
    title : {type: String, required: true},
    status : {type: Boolean, default: false},
},{
    versionKey: false
});

const TodoModel = mongoose.model("alltodo", todoschema);

module.exports = {TodoModel};