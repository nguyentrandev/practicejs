//Object create methods
const personPrototype ={
  greeting: function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getMarried: function(newLastName){
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototype);
mary.firstName = 'Mary';
mary.lastName = 'Nguyen';
mary.age = 30;

console.log(mary.greeting());
mary.getMarried('Alexander');
console.log(mary.greeting());



const Nguyen = Object.create(personPrototype, {
  firstName: {value: 'Nguyen'},
  lastName: {value: 'Tran'},
  age: {value: 25}
});

console.log(Nguyen);
console.log(Nguyen.greeting());


function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"