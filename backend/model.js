const mongoose = require("mongoose")
const Schema = mongoose.Schema

let Boiler = new Schema({
    boiler_string: {
        type: String
    },
    boiler_boolean: {
        type: Boolean
    },
    boiler_number: {
        type: Number
    }
})


module.exports = mongoose.model("Boiler", Boiler)

