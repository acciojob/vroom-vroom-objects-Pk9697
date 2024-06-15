// Complete the js code
// function Car(make, model) {
// 	this._make=make
// 	this._model=model
// }

// Car.prototype.getMakeModel=function () {
// 	return `${this._make} ${this._model}`
// }

// function SportsCar(make, model, topSpeed) {
// 	Car.call(this,make,model)
// 	this._topSpeed=topSpeed
// }
// // Shallow copy to copy all the methods Car has like getMakeModel , 
// // and doing this in shallow copy way so that any 
// SportsCar.prototype={...Car.prototype}
// // SportsCar.prototype=Object.create({},Car.prototype)

// SportsCar.prototype.getTopSpeed=function () {
// 	return this._topSpeed
// }
 
// const car = new SportsCar("Ferrari", "Testarossa", 200);
// console.log(car.getMakeModel()); // Output: Ferrari Testarossa
// console.log(car.getTopSpeed()); // Output: 200


// SportsCar.prototype.getInfo=function () {
// 	return `${this._make} + ${this._model}`
// }

// console.log(car.getInfo());

class Car{
	constructor(make,model){
		this._make=make
		this._model=model
	}

	get make(){
		return this._make
	}
	
	get model(){
		return this._model
	}

	getMakeModel() {
		return `${this._make} ${this._model}`
	}
}

class SportsCar extends Car{
	constructor(make,model,topSpeed){
		super(make,model)
		this._topSpeed=topSpeed
	}

	get topSpeed(){
		return this._topSpeed
	}

	getTopSpeed() {
		return this._topSpeed
	}
}


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
