
let playerOne = "paper";
let computer ="scissors";

switch (playerOne) {
  case computer:
    console.log("Tie game!");
    break;
    case  "rock":
      if (computer === "paper") {
        console.log("computer wins!");
      } else {
        console.log("player wins!")
      }
      break;
      
      case computer:
        console.log("Tie game!");
        break;
        case  "paper":
          if (computer === "scissors") {
            console.log("computer wins!");
          } else {
            console.log("player wins!")
          }
          break;
          default:
            if (computer === "rock") {
                console.log("computer wins!");
            } else {
                console.log("playerOne wins!");
            }
}