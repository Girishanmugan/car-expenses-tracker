var express=require("express"); 
var bodyParser=require("body-parser"); 

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/CST'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
}) 

var app=express(); 

app.use(bodyParser.json()); 
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true})); 

app.post('/fuel',function(req,res){
	var fd =req.body.fueldate;
	var fl=req.body.fuelliters;
	var fc=req.body.fuelcost;
	var data={
		"fueldate":fd,
		"fuelliter":fl,
		"fuelcost":fc
	}
	db.collection('fuel').insertOne(data,function(err,collection){
		if (err) throw err;
		console.log("Data inserted Succsessfully");
	});
	return res.send("Data inserted")
});

app.post('/expense',function(req,res){
	var date=req.body.date;
	var cat=req.body.category;
	var amt=req.body.amount;
	var note=req.body.note;
	var data={
		"date":date,
		"category":cat,
		"amount":amt,
		"notes":note
	}
	db.collection('expense').insertOne(data,function(err,collection){
		if (err) throw err;
		console.log('Data inserted Succsessfully');
	});
	return res.send("Data inserted")

});

app.post('/trip',function(req,res){
	var date=req.body.date;
	var sl=req.body.startlocation;
	var el=req.body.endlocation;
	var dist=req.body.distance;
	var fuel=req.body.fuel;
	var cost=req.body.cost;
	var data={
		"date":date,
		"startpoint":sl,
		"endpoint":el,
		"distance":dist,
		"fuel":fuel,
		"cost":cost
	}
	db.collection('trip').insertOne(data,function(err,collection){
		if (err) throw err;
		console.log('Data inserted Succsessfully');
	});
	return res.send("Data inserted")
});

app.post('/sign_up', function(req,res){ 
    var name=req.body.name;
    var mail=req.body.mail;
    var pass=req.body.password;
	var data = { 
		"name": name, 
        "mail":mail,
		"password":pass
	    } 
db.collection('signup').insertOne(data,function(err, collection){ 
		if (err) throw err; 
		console.log("Data inserted Successfully");
	});
	return res.redirect('index.html'); 
});

app.post('/login', async function(req, res) {
    var mail = req.body.mail?.trim();
    var pass = req.body.password?.trim();

    const user = await db.collection('signup').findOne({ 
        mail: mail, 
        password: pass 
    });

    if (!user) {
        return res.send("Invalid email or password");
    }

	if(user){
	console.log("Login Successful");
    return res.redirect('/index.html');
	}
})

.listen(3000);

console.log("server listening at port http://localhot:3000");