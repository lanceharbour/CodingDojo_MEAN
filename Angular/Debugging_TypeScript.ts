// 1) Setting types
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
// Change number to string.
myString = "9";

// 2) Setting the types for function parameters
function sayHello(name: string){
   return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
// Using a int vs using a string.  Change int to string to work.
console.log(sayHello("9"));

// 3) Optional parameters
function fullName(firstName: string, lastName: string, middleName?: string){
    if (middleName) {
        let fullName = `${firstName} ${middleName} ${lastName}`;
        return fullName;
    }
    else {
        let fullName = `${firstName} ${lastName}`;
        return fullName;
    }
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
// add ? to middle name to make it optional and check if declared in function
console.log(fullName("Jimbo", "Jones"));

//4) Classes and function parameters
interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
// belts in jay was misspelled causing an error
console.log(graduate(jay));

//5) Classes and function parameters
class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
// This is not making an instance of Ninja, for some reason:
// Need to add new and add values for firtsName and lastName
const shane = new Ninja('Shane', "Something");
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = new Ninja("Alan", "Turing");
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
// need to change const turing to instance of Ninja
console.log(study(turing));

//6) Arrow functions
var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => x * x;
// This is not showing me what I want:
//need to remove curlies from {x * x}
console.log(square(4));
// This is not working:
// need to add parens to x,y 
var multiply = (x, y) => x * y;
console.log(multiply(3, 3));
// Nor is this working:
// needed to add curlies since we're doing more then one thing to arrow function
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
};
console.log(math(3, 5));

//7) Arrow functions and 'this'
class Elephant {
   constructor(public age: number){}
   birthday = () => {
      this.age++;
   }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
// need to remove function and add => to pass age to this.age++