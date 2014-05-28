// I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

// Rescue Mission

// move down two
// move right one
// move up 2
// move right 2
// move down 1
// attack
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

// Grab the Mushroom

// move up then right
// grab mushroom
// move left
// move up
// attack

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();

this.attackNearbyEnemy();
 
// Drink Me

// attack enemy
// move right
// move down then up
// move right
// attack enemy

this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();
 
// Taunt the Guards
// move right
// taunt
// move left
// move left
// attack
// move right
// follow
// move right
// move up
// say something
// attack twice
// say follow
// move right

this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey you!");
this.say("Attack!");
this.say("Attack!");
this.say("Follow me.");
this.moveRight();
 
// It's a Trap
// move down 2
// lure ogre
// move up 2
// attack twice

this.moveDown();
this.moveDown();
this.say("Hey You!");
this.moveUp();
this.moveUp();
this.say("Attack!");
this.say("Attack!");

// Taunt

// say mean things four times

this.say("Hey!");
this.say("I said HEY!");
this.say("Ok, poopie head.");
this.say("FIGHT ME!");

// Cowardly Taunt
// move to around 40, 20
// say something
// move to 70, 10

this.moveXY(46, 28);
this.say("I can lure them in here.");
this.moveXY(70, 10);

// Commanding Followers

// move to troops
// say follow
// move to enemies
// say attack
// move to safety
 
this.moveXY(69, 67);
this.say("Follow me!");
this.moveXY(63 ,41);
this.say("Hail, friends!");
this.say("Attack");
this.moveXY(75, 65);

// Mobile Artillery
// move and attack first grou
// move and attack second group
// retreat and attack in spot of retreat
// move and attack third group
// retreat and attaack in spot of retreat

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
this.moveXY(43, 38);
this.attackXY(47, 64);
this.moveXY(38, 24);
this.attackXY(43, 38);
this.moveXY(50, 32);
this.attackXY(66, 52);
this.moveXY(50, 24);
this.attackXY(61, 40);
 
// Rlease 3:
// This is referring to the selected element to modify. In the case of the game it is the player
// but in any other case it is the current selection you are modifying.

// The () in JS accepts a parameter. The parameter in the say function would output into
// the screen for what the player was saying.

// semicolons tell the program that the line of code is finished. It helps keep things clean as well. 

// Reflection:
// This was pretty fun. I didn't really feel like I learned much JS, but I definitely got
// the hang of writing out my moves and performing them. Having a gameplan to commit to was
// helpful when writing the code out. Even if it got me close, but not all the way, it still
// seemed to make things move along with much more ease.