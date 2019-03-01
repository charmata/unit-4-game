var gameData = {
  random: 0,
  crystals: [0, 0, 0, 0],
  total: 0
};

function randNum() {
  gameData.random = Math.floor(Math.random() * 101 + 19);
  $("#random-number").text(gameData.random);
}

function randCrystal() {
  for (var i = 0; i < 4; i++) {
    gameData.crystals[i] = Math.floor(Math.random() * 11 + 1);
  }
}

function newGame() {
  randNum();
  randCrystal();
}

$(document).ready(function() {
  newGame();
});
