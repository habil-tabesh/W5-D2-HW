//Create Basic Object
let Dog = {
    name: "T-rex",
    numLegs: 4
};





//Using dot notation to access the property of the object
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + dog.numLegs + " legs."; }
};
dog.sayLegs();





//Creating a method on an object 
let dOg = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + dOg.numLegs + " legs."; }
};
dOg.sayLegs(4);





//making the code more reusable with the this keyboard
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};
dog.sayLegs();






//Defining a constructor function
function Dog() {
    this.name = 'T-rex',
        this.color = 'black',
        this.numLegs = 4;}





//using constructor to create Object
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;}
let hound = new Dog();




//Extending constructor to recieve Arguments
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;}
let terrier = new Dog('terrier', 'white');





//verifying an object's constructor with instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;}
let myHouse = new House(4);
myHouse instanceof House;





//Understanding Own properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;}
let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}




//Using prototype properties to reduce duplicate code
function Dog(name) {
    this.name = name;}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");

