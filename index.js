let players = {
  1: 0,
  2: 0,
};

document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber(1)}.png`);
document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber(2)}.png`);

//Winner

let winner = 0;

console.log(players);

if (players[1] > players[2]) winner = `Winner is Player 1`;
else if (players[2] > players[1]) winner = `Winner is Player 2`;
else winner = "OMG Its a Draw!";

document.querySelector("h1").innerHTML = winner;

function randomNumber(player) {
  let random = Math.floor(Math.random() * 6) + 1;
  players[player] = random;
  return random;
}
