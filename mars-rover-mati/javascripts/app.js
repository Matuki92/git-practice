// Rover Object Goes Here
// ======================
var kata = {
  direction : "N",
  position : [0,0],
  travelLog : []
}
// ======================

function turnLeft(rover){
  switch (rover.direction){
    case "N": rover.direction = "W";console.log("Rover is now facing West");break;
    case "W": rover.direction = "S";console.log("Rover is now facing South");break;
    case "S": rover.direction = "E";console.log("Rover is now facing East");break;
    case "E": rover.direction = "N";console.log("Rover is now facing North");break;
  }
}

function turnRight(rover){
  switch (rover.direction){
    case "N": rover.direction = "E";console.log("Rover is now facing East");break;
    case "E": rover.direction = "S";console.log("Rover is now facing South");break;
    case "S": rover.direction = "W";console.log("Rover is now facing West");break;
    case "W": rover.direction = "N";console.log("Rover is now facing North");break;
  }
}

function moveForward(rover){

    switch (rover.direction){
      case "N": rover.position[1]--;console.log("Rover has moved North");break;
      case "E": rover.position[0]++;console.log("Rover has moved East");break;
      case "S": rover.position[1]++;console.log("Rover has moved South");break;
      case "W": rover.position[0]--;console.log("Rover has moved West");break;
  }
  console.log(". Current position: X = " + rover.position[0] + ", Y = " + rover.position[1]);
}

function moveBackwards(rover){
 
    switch (rover.direction){
      case "N": rover.position[1]++;console.log("Rover has moved South backwards");break;
      case "E": rover.position[0]--;console.log("Rover has moved West backwards");break;
      case "S": rover.position[1]--;console.log("Rover has moved North backwards");break;
      case "W": rover.position[0]++;console.log("Rover has moved East backwards");break;
  }
  console.log(". Current position: X = " + rover.position[0] + ", Y = " + rover.position[1]);
}

function commands(rover, string){
  for (var i = 0;i < string.length;i++){
    var pos = rover.position + " ";

    switch (string[i]){
      case "r": turnRight(rover);break;
      case "l": turnLeft(rover);break;
      case "f": moveForward(rover);rover.travelLog.push(pos);break;
      case "b": moveBackwards(rover);rover.travelLog.push(pos);break;
    }
  }

  alert("Coordinates our rover has been: " + rover.travelLog);
  
}


alert("Running the example function: commands(rover, string), with the parameters kata,\"rfffrffflbb\"");
commands(kata, "rfffrffflbb");