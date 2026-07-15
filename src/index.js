const player1 = {
  NOME: "Mario",
  VELOCIDADE: 8,
  MANOBRABLIDADE: 6,
  PODER: 6,
  PONTOS: 0,
};

const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 6,
  MANOBRABLIDADE: 8,
  PODER: 8,
  PONTOS: 0,
};

const player3 = {
  NOME: "Peach",
  VELOCIDADE: 6,
  MANOBRABLIDADE: 8,
  PODER: 4,
  PONTOS: 0,
};

const player4 = {
  NOME: "Bowser",
  VELOCIDADE: 10,
  MANOBRABLIDADE: 4,
  PODER: 10,
  PONTOS: 0,
};

const player5 = {
  NOME: "Yoshi",
  VELOCIDADE: 4,
  MANOBRABLIDADE: 8,
  PODER: 3,
  PONTOS: 0,
};

const player6 = {
  NOME: "Donkey Kong",
  VELOCIDADE: 4,
  MANOBRABLIDADE: 4,
  PODER: 10,
  PONTOS: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function playRaceEngine(charater1, charater2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`\n🏁🚦 RODADA ${round} COMEÇANDO...\n`);
  }
}

(async function main() {
  console.log(
    `🏁🚦 CORRIDA ENTRE ${player1.NOME} E ${player2.NOME} COMEÇÃNDO...\n`,
  );

  await playRaceEngine(player1, player2);
})();
