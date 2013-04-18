
var car= new Array();
car.push(new CarType ( "Honda", 15, 7));
car.push(new CarType ( "Kia" , 16, 7));
car.push(new CarType ( "Ford", 17, 7));
car.push(new CarType ( "BMW", 50, 9));
car.push(new CarType ( "Toyota", 18, 7));
car.push(new CarType ( "Porche", 100, 10));

function CarType(name, price, performance) {
	this.price = price;
	this.performance = performance;
	this.name = name;
}

CarType.prototype.display = function () {
	console.log(this.price +", " + this.name +", " + this.performance);
	
}


var engines =new Array();
engines.push(new EngineType ("Engine 1", 2, 1));
engines.push(new EngineType ("Engine 2", 3, 2)); 
engines.push(new EngineType ("Engine 3", 4, 3)); 
engines.push(new EngineType ("Engine 4", 7, 4)); 
engines.push(new EngineType ("Engine 5", 8, 5)); 
engines.push(new EngineType ("Engine 6", 10, 6));  

function EngineType(name, price, performance) {
	this.price = price;
	this.performance = performance;
	this.name = name;
}

EngineType.prototype.display = function () {
	console.log(this.price +", " + this.name +", " + this.performance);
	
}

var body =new Array();
body.push(new BodyType ("Body 1", 30000, 5));
body.push(new BodyType ("Body 2", 30000, 5)); 
body.push(new BodyType ("Body 3", 30000, 5)); 
body.push(new BodyType ("Body 4", 30000, 5)); 
body.push(new BodyType ("Body 5", 30000, 5)); 
body.push(new BodyType ("Body 6", 30000, 5));  

function BodyType(name, price, performance) {
	this.price = price;
	this.performance = performance;
	this.name = name;
}

BodyType.prototype.display = function () {
	console.log(this.price +", " + this.name +", " + this.performance);
	
}

var wheels =new Array();
wheels.push(new WheelsType ("Wheels 1", 30000, 5));
wheels.push(new WheelsType ("Wheels 2", 30000, 5)); 
wheels.push(new WheelsType ("Wheels 3", 30000, 5)); 
wheels.push(new WheelsType ("Wheels 4", 30000, 5)); 
wheels.push(new WheelsType ("Wheels 5", 30000, 5)); 
wheels.push(new WheelsType ("Wheels 6", 30000, 5));  

function WheelsType(name, price, performance) {
	this.price = price;
	this.performance = performance;
	this.name = name;
}

WheelsType.prototype.display = function () {
	console.log(this.price +", " + this.name +", " + this.performance);
	
}

//for (i=0;i<6;i++)
//{
//engines[i].display();
//}

//for (i=0;i<6;i++)
//{
//car[i].display();
//}

//for (i=0;i<6;i++)
//{
//body[i].display();
//}

//for (i=0;i<6;i++)
//{
//wheels[i].display();
//}
