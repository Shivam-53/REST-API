const express=require("express");
const router=new express.Router();
const ProductSchema=require("../src/models/model")


router.post("/products", async (req, res) => {
    try {
        const productData = new ProductSchema(req.body)
        const pdata= await productData.save()

        res.status(201).send(pdata)   
        console.log("Data is posted")
    } catch (error) {
        console.log(error)
        res.status(400)

    }
})


router.get("/products",async (req,res)=>{
    try {
        const _id=req.params.id;
        const pSchema= await ProductSchema.find({}).sort({"id":1})
        res.status(200).send(pSchema)

    } catch (error) {
        
    }
})


router.get("/products/:id",async (req,res)=>{
    try {
        const _id=req.params.id;
        const pSchema= await ProductSchema.findById({_id})
        res.status(200).send(pSchema)

    } catch (error) {
        
    }
})

router.patch("/products/:id",async (req,res)=>{
    try {
        const _id=req.params.id;
        const pSchema= await ProductSchema.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.status(200).send(pSchema)

    } catch (error) {
        res.status(500)
    }
})

router.delete("/products/:id",async (req,res)=>{
    try {
        const _id=req.params.id;
        const pSchema= await ProductSchema.findByIdAndDelete(_id)
        res.status(200).send(pSchema)

    } catch (error) {
        res.status(500)
    }
})

module.exports=router;