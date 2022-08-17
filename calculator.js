const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){

    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);

    var result=num1+num2;

    res.send("The result of calculation is " +result);
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight/(height*height);

    res.send("Your BMI is  " + (bmi*10000)   +" kg/m^2      "  +  "        Note: You are healthy if it is in between 18.5 to 25");
});
app.listen(3000,function(){
    console.log("server is up and running on port 3000");
});