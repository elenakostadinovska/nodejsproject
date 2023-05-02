const express=require("express");
const { route } = require("express/lib/application");
const Contact = require("../models/Contact");

//const Detail = require("../models/Detail");
//const Slider = require("../models/Slider");



const routes=express.Router()

routes.get("/", async (req,res) => {

    //const details= await Detail.findOne({"_id":"6450417b69f1d84e3c26e6d5"});
    //const slides= await Slider.find();
    //console.log(details)
    //console.log(slides)
    
    res.render("index", {
        //details:details,
    });

});

routes.get("/gallery", async(req,res) =>{
    //const details= await Detail.findOne({"_id":"6450417b69f1d84e3c26e6d5"})
   res.render("gallery", {
    //details: details,
   });
});
//proccessing contact form
routes.post("/process-contact-form",async(request,response) =>{
    console.log("form is submitted")
    console.log(request.body)
    //saves data to db
    try{

        const data=await Contact.create(request.body)
        console.log(data)
        response.redirect("/")

    }catch(e)
    {
        console.log(e)
        response.redirect("/")
    }
})

module.exports=routes;