const { Schema,model} = require("mongoose")

let TaskSchema = new Schema({
    name: {
        type: String,
        default:""
    },
    status: {
        type: Boolean,
        default:false
}
}, { timestamps: true, versionKey: false })

module.exports = model("task",TaskSchema)