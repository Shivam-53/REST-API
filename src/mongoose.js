const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/newtest")
.then(()=>console.log("Connectection to database succesfull"))
.catch((err)=>console.log(err))
