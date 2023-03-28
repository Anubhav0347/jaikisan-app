const mongoose=require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    mobileNumber: String, //10 digits long
    DOB: Date,
    emailID: String, //abc@xyz.com
    address: String,
    customerID: String,    //UUIDstatus
    status:String        
  },
  { timestamps: true }
);

module.exports=mongoose.model('Customer',customerSchema);