const express = require("express");
const hbs= require("hbs")
const app = express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser")
const routes= require("./routes/main")
//const Detail=require("./models/Detail")
//const Slider=require("./models/Slider")

// /static/css/style.css
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use("/static",express.static("public"))
app.use("",routes)


//(template engine)

app.set("view engine", "hbs")
app.set("views","views")
hbs.registerPartials("views/partials")

//db connections
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://0.0.0.0:27017/nodejs",()=>{
    console.log("db connected")

 /*   Slider.create([
        {
            title: "Learn Java in very easy manner",
            subTitle:"Java is one of the most popular programming language.",
            imageUrl:"/static/images/contact.jpg"
        },
        {
            title: "Whats Django in Python",
            subTitle:"Django is one of the most popular programming language.",
            imageUrl:"/static/images/about1.jpg"
        },
        {
            title: "And Node Js?",
            subTitle:"Node Js is one of the most popular programming language.",
            imageUrl:"/static/images/contact.jpg"
        },
    ])   */ 


   /* Detail.create({
        brandName:"Info Technical Solutions",
        brandIconUrl:"",
        links:[
            {
                label:"Home",
                url:"/"
            },
            {
                label:"Services",
                url:"/services"
            },
            {
                label:"Gallery",
                url:"/gallery"
            },
            {
                label:"About",
                url:"/about"
            },
            {
                label:"Contact Us",
                url:"/contact-us"
            },
        ]
    })*/
});

mongoose.con

app.listen(process.env.PORT | 5556, () => {
    console.log("server started");
});