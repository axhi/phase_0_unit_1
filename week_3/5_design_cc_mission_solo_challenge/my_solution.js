// This is a solo challenge

// Your mission description:
// To save the princess from the evil guards.
// We may need to drink potion and lure guards in the process.

// Pseudocode
// Move a few steps right towards the castle door
// Lure the guards by yelling at them
// Move back left to let your guardsman have a shot
// Tell your guardsman to fire
// Move right to the castle door
// Move up towards the door
// Break down the door
// Move towards the princess
// Tell the princess you missed her
// Hug the princess
// Tell the princess to follow you out
// Take steps towards the door
// Escape

// Initial Code
var prince {
	id: "Prince Fella Guy",
	spriteName: Knight,
	health: 15 
}
var princess {
	id: "Princess Lady Girl",
	spriteName: Princess,
	health: 4
}
this.moveRight();
this.moveRight();
this.say("Hey DUMMY!");
this.moveLeft();
this.moveLeft();
this.say("FIRE AWAY BRAH");
this.moveRight();
this.moveRight();
this.breakDoorDown();
this.moveRight();
this.say("Hey Love!");
this.hug();
this.say("Follow me!");
this.moveLeft();
this.moveRight();


// Refactored Code

this.moveRight(2);
this.say("Hey DUMMY!");
this.moveLeft(2);
this.say("FIRE AWAY BRAH");
this.moveRight(2);
this.breakDoorDown();
this.moveRight();
this.say("Hey Love!");
this.hug();
this.say"Follow me!");
this.moveLeft();
this.moveRight();



// Reflection
// I'm not entirely sure that I made a fun part to this game, or that my refactoring is right. Mostly because
// I didn't interact with a few of the things I wanted to do/they may not be real things. Also, I'm not sure how to 
// initiate my code to start using a new object with the this. I figured it would happen after they were selected.