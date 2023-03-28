const express=require('express');
const router=express.Router();
const customerController=require("../controllers/customerController")


router.get('/new',(req,res)=>{
    res.send("oh hello")
});

router
.post('/customer',customerController.createCustomer)
.get('/customer',customerController.getCustomer);

router.all("/*", async function(req,res){
    return res.status(400).send({status:false,message:"plz check url"})
})

module.exports=router;
