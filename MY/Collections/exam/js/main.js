
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Vehicle = Backbone.Model.extend({

	idAttribute: "registrationNumber",

	validate: function(attrs){
		if (!attrs.registrationNumber)
			return "Vehicle is not valid.";
	},

	start: function(){
		console.log("Vehicle started.");
	}
});

var Car = Vehicle.extend({
	start: function(){
		console.log("Car with registration number " + this.get("registrationNumber") + " started.");
	}
});

var car = new Car({
	registrationNumber: "XLI887",
	color: "Blue"
});

var Cars = Backbone.Collection.extend({
    model: Car
});
let cars = new Cars();
cars.push(new Car({registrationNumber: "ZNP123",color: "Blue"}))
cars.push(car);
cars.push(new Car({registrationNumber: "XUV456",color: "Gray"}))


let AllCarsBlue = cars.where({color: "Blue"});
console.log('AllCarsBlud: ', AllCarsBlue);


let Car_XLI887 = cars.get("XLI887")
console.log('Car_XLI887: ', Car_XLI887)

cars.remove(Car_XLI887);

console.log(cars.toJSON());

cars.each(function(car){
    console.log(car);
})
