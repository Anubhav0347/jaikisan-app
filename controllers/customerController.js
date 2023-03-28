const customerModel= require("../models/customerModel");

const createCustomer= async function(req,res){
try {
    let data =req.body
    const doc=await customerModel.create(data)
    return res.status(201).send({status:true,message:"Customer created successfully", data:doc})
    
} catch (error) {
    res.status(500).send({message:error.message})
}
}

const getCustomer=async function(req,res){
    try {
       // data =req.params.customerId
        const user=await customerModel.find()
        return res.status(200).send({status:true,message:"data fetched",data:user})

    } catch (error) {
        res.status(500).send({message:error.message})
    }
}

exports.createCustomer=createCustomer
exports.getCustomer=getCustomer;