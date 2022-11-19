// Decision tree!

if (playerOne === computer) {
  console.log("Computer wins!")
} else if (playerOne === "rock") {
  if (computer === "paper") {
    console.log("computer wins")
  } else {
    console.log("playerOne wins")
  }
} else if (playerOne === "paper") {
  if (computer === "scissors") {
    console.log("computer wins")
  } else {
    console.log("playerOne wins")
  }
} else {
  if (computer === "rock") {
    console.log("computer wins")
  } else {
    console.log("playerOne wins")
  }
}
