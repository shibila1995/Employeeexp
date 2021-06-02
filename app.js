var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var {employeemodel}=require('./models/employeemodel')
mongoose.connect('mongodb+srv://shibila:shibila22@cluster0.lzqma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true})

var app=express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/read',(req,res)=>{

})
app.post('/read',(req,res)=>{
    try{
        var employeeobject=new employeemodel(req.body)
        employeeobject.save()
    }
     catch(error){
        res.json({"status":"success"})
    }

})

app.get('/viewlall',async(req,res)=>{
    try{
        var result=await employeemodel.find()
        res.json(result)
    }
  
    catch(error){
        res.json({"status":"success"})
    }
})

app.post('/search',async(req,res)=>{
    try{
        var result=await employeemodel.find(req.body)
        res.json(result)
    }
    
    catch(error){
        res.json({"status":"success"})
    }
})

app.post('/edit',async(req,res)=>{
    try{
        var result=await employeemodel.findByIdAndUpdate({"._id":req.body._id},req.body)
        res.json(result)
    }
    
    catch(error){
        res.json({"status":"success"})
    }
})

app.post('/delete',(req,res)=>{
    var result=employeemodel.findOneAndDelete({"_id":req.body._id})
res.json(result)
})
app.listen(3003,()=>{
    console.log("server started")
})