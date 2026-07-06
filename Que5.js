/*
Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value.
*/

let fix_number=25;
let user=prompt("guess game number:");

while(user != fix_number)
{
       user= prompt("wrong guess try again");
}

console.log("congrats you guess number")
