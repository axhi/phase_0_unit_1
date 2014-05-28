// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}



// __________________________________________
// Write your code below.

var adam = { 
  name: "Adam",
  spouse: terah
} // object adam with name and spoouse

terah.spouse = adam; //set terah spouse to object adam
terah.weight = 125; // changed terah's weight to 125
delete terah.eyeColor; // deleted terah's eyec color

terah.children = { // object for children with no properties
}
terah.children.carson = { //added child with name carson
  name: "Carson"
}
terah.children.carter = { //child with name carter
  name: "Carter"
}
terah.children.colton = { //child with name colton
  name: "Colton"
}
adam.children = terah.children; //adam children = terah children

// __________________________________________
// Reflection: Use the reflection guidelines
// I ran the code in node.js from the console and started adding items to find pass the tests, one by one. This method
// seems to work best for me and I keep using it to solve these problems. I ran into some issues with assigning the
// children property to terah. When I created the empty object, I kept trying to assigning the kids names inside of the
// object I had created. This was making an error I couldn't resolve. I then, out of pure luck, tried it outside and 
// it returned true. I looked it up and realized I was wrong in assigning it within the object, as that would do
// almost nothing. Something I need to look out for, and I'm sure I will get better at.


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)