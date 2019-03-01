var gameData = {
  random: 0,
  crystals: [0, 0, 0, 0],
  total: 0,
  wins: 0,
  losses: 0
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
  gameData.total = 0;
  $("#score").text(gameData.total);
  $("#wins").text(gameData.wins);
  $("#losses").text(gameData.losses);
}

$(document).ready(function() {
  newGame();
  $("#crystals img").on("click", function() {
    gameData.total += gameData.crystals[$(this).attr("data-attr") - 1];
    $("#score").text(gameData.total);

    if (gameData.total === gameData.random) {
      gameData.wins++;
      newGame();
    } else if (gameData.total > gameData.random) {
      gameData.losses++;
      newGame();
    }
  });
});
