// I paired by myself on this challenge.

// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John","Tom","Eric","Mary"];





// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// In this challenge, I first ran the script to see where it err'd out. I didn't even look at the test
// code because I didn't wnt to try and confuse myself. After running it I wasn't sure what I needed so,
// I ran through the help within the DBC for objects and what have you. Then I just started filling in
// aspects to get where I needed to be. It was a large 'trial and error' type code. This was a good way
// to just get the hang of what is going on within the code. It was nice to write code within the test
// as opposed to the game where it was specific and didn't really require much thought. This was a bit more
// thought provoking.


// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

