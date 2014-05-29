// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Joey Sabani
//  2. Dan Freed


// 0. "YOU SIGNED... WHO?!"
var actor1 = {
	name: "",
	age: 0,
	quote: ""
}

// 1. "Here they Come!"

var actor1 = { //client one object literal
    name: "Adam Sandler",
    age: 47,
    quote: "That's your home! Are you too good for your home?!"
}
var actor2 = { //client #2, Kristen Bell
    name: "Kristen Bell",
    age: 33 ,
    quote: "Do you wanna build a snowman?"
}
var actor3 = { //client #3, Jim Carrey
    name: "Jim Carrey",
    age: 52,
    quote: "...So your telling me there's a chance?"
}

// 2. "TIME IS MONEY!"

//YOUR CODE HERE!
function Client (name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
};

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 3. "SHOW 'EM OFF!"

function() {
  // display client name
  console.log("Our client " + this.name + "is " + this.age + "years old. You might have heard them say " + this.quote);
}


// 4. "But wait, there's more!"
function Client (name, age, quote) { // client  function to make a new one
    this.name = name;
    this.age = age;
    this.quote = quote;
    this.showQuote = function() {
        // display client name
        console.log("Our client " + this.name + "is " + this.age + "years old. You might have heard them say " + this.quote);
        }
};


// 5.  ** BONUS **


//  6.  Your Reflection:
// At the end of the session I felt a little more confident in JavaScript and what it has to offer. As my pair and I were
// running on little sleep, it was really helpful to have our instructor to lead us in the right direction when we
// fell off track. We had a small struggle with part 4, but after we relazied what we needed to do to display the client
// to the console, we moved along well. 
