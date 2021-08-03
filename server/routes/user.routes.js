const express = require("express");
const router = express.Router();
const Person = require("./../model/person.model")

router.get("/",async(req,res)=>{
try {
    const data = await Person.find();
    // console.log(data);
   return res.status(200).json(data);
} catch (error) {
 console.error(error)   
}
})

router.post("/",async(req,res)=>{
    try {
        const {name,email,info,img} = req.body;
        console.log(req.body)
        if(!name || !email || !info || !img)
        return res.status(201).json({message:"enter all the details"});
        const person = await new Person({name,email,info,img});
        await person.save();
        res.status(201).json(person);
    } catch (error) {
        
    }
})

router.get('/search/:user',async(req,res)=>{
    try {
        const {user} = req.params;
        console.log(req.params)
        if(!user)
        return res.status(404).json({message:"enter user name"})
        const data = await Person.find({name:user});
        res.status(200).json(data)
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;