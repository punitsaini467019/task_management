let {TaskModel} = require("../model")
exports.Add_Task = async (req, res) => {
    const { name, status } = req.body
    let data = await TaskModel.create({
        name: name,
        status:status
    })
    res.status(200).json({status:true,message:"Task created successfully",data:data})
}