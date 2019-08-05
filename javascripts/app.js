// Rover Object Goes Here
let rover = {
  direction : "N",
  x: 0,
  y: 0,
  travelLog: []

}
// ======================
var board = [
  [R, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
]
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  if (rover.direction === "N") {
  rover.direction = "W";
  } else if (rover.direction === "W") {
  rover.direction = "S";
  } else if (rover.direction === "S") {
  rover.direction = "E";
  }
  console.log(`Rover is now facing: ${rover.direction}.`);
};

function turnRight(rover){
  console.log("turnRight was called!");
  if (rover.direction === "E") {
  rover.direction = "N";
  } else if (rover.direction === "N") {
    rover.direction = "W";
  } else if (rover.direction === "W") {
    rover.direction = "S";
  }
} console.log(`Rover is now facing : ${rover.direction}.`);


function moveForward(){
  console.log("moveForward was called");
  switch (rover.direction) {
    case 'N': rover.y -= 1
    break;
    case 'E': rover.x += 1
    break; 
    case 'S': rover.y += 1
    break;
    case 'W': rover.x -= 1
    break; 
  }
};
rover.travelLog.push("(" + rover.position.x + ", " + rover.position.y + ")");
  
function moveBackward(){
  console.log("moveBackward was called");
  switch (rover.direction){
    case 'N': rover.y += 1
    break;
    case 'E': rover.x -= 1
    break;
    case 'S': rover.y -= 1
    break;
    case 'W': rover.x +=1
    break;
  }
};
rover.travelLog.push("(" + rover.position.x + ", " + rover.position.y + ")");
 
  function commands(rover, commands) {
  for (var i = 0; i < commands.length; i++){
    var command = commands[i];
    if (command === "f"){
      moveForward(rover);
    } else if (command === "r"){
      turnRight(rover);
    } else if (command === "l"){
      turnLeft(rover);
    } else if (command === "b"){
      moveBackwards();
    } else (i >= 10){
      return false;
    }
  }
    console.log(rover.travelLog)
  }
