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

async function getRandomBlock() {
  let random = Math.random();
  // console.log(`O NÚMERO SORTEADO FOI: ${random}\n`);
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }
  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou o dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute} `,
  );
}

async function playRaceEngine(charater1, charater2) {
  for (let round = 1; round <= 5; round++) {
    console.log(` 🏁🚦RODADA ${round} COMEÇANDO...`);

    let block = await getRandomBlock();
    console.log(`O BLOCO SORTEADO FOI: ${block}\n`);

    // ROLAR DADOS

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // TESTE DE HABILIDADE

    let toltalTestSkill1 = 0;
    let toltalTestSkill2 = 0;

    if (block === "RETA") {
      toltalTestSkill1 = diceResult1 + charater1.VELOCIDADE;
      toltalTestSkill2 = diceResult2 + charater2.VELOCIDADE;

      await logRollResult(
        charater1.NOME,
        "velocidade",
        diceResult1,
        charater1.VELOCIDADE,
      );
      await logRollResult(
        charater2.NOME,
        "velocidade",
        diceResult1,
        charater2.VELOCIDADE,
      );
    }

    if (block === "CURVA") {
      toltalTestSkill1 = diceResult1 + charater1.MANOBRABLIDADE;
      toltalTestSkill2 = diceResult2 + charater2.MANOBRABLIDADE;

      await logRollResult(
        charater1.NOME,
        "manobrabilidade",
        diceResult1,
        charater1.MANOBRABLIDADE,
      );
      await logRollResult(
        charater2.NOME,
        "manobrabilidade",
        diceResult1,
        charater2.MANOBRABLIDADE,
      );
    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + charater1.PODER;
      let powerResult2 = diceResult2 + charater2.PODER;
    }
  }
}

(async function main() {
  console.log(
    `🏁🚦 CORRIDA ENTRE ${player1.NOME} E ${player2.NOME} COMEÇÃNDO...\n`,
  );

  await playRaceEngine(player1, player2);
})();
