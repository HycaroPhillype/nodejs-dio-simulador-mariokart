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

      console.log(`${charater1.NOME} confrontou com ${charater2.NOME}!
        🥊`);

      await logRollResult(
        charater1.NOME,
        "poder",
        diceResult1,
        charater1.PODER,
      );
      await logRollResult(
        charater2.NOME,
        "poder",
        diceResult2,
        charater2.PODER,
      );

      if (powerResult1 > powerResult2 && charater2.PONTOS > 0) {
        console.log(
          `${charater1.NOME} venceu o confronto!! ${charater2.NOME} perdeu 1 ponto 🐢`,
        );

        charater2.PONTOS--;
      }

      if (powerResult2 > powerResult1 && charater1.PONTOS > 0) {
        console.log(
          `${charater2.NOME} venceu o confronto!! ${charater1.NOME} perdeu 1 ponto 🐢`,
        );

        charater1.PONTOS--;
      }

      console.log(
        powerResult2 === powerResult1
          ? "Confronto teminou em empate, nenhum ponto foi perdido! "
          : "",
      );
    }
    // VIRFICAR O VENCEDOR

    // console.log("Teste 1:", toltalTestSkill1);
    // console.log("Teste 2:", toltalTestSkill2);
    // console.log("Bloco:", block);

    if (toltalTestSkill1 > toltalTestSkill2) {
      console.log(`${charater1.NOME} venceu essa rodada, marcou 1 ponto! `);
      charater1.PONTOS++;
    } else if (toltalTestSkill2 > toltalTestSkill1) {
      console.log(`${charater2.NOME} venceu essa rodada, marcou 1 ponto! `);
      charater2.PONTOS++;
    }

    console.log("--------------------------------------------------");
  }
}

async function declareWinner(charater1, charater2) {
  console.log("Resultado final");
  console.log(`${charater1.NOME}: ${charater1.PONTOS} ponto(s)`);
  console.log(`${charater2.NOME}: ${charater2.PONTOS} ponto(s)`);

  if (charater1.PONTOS > charater2.PONTOS)
    console.log(`\n${charater1.NOME} venceu a corrida! PARABÉNS! 🏆`);
  else if (charater2.PONTOS > charater1.PONTOS)
    console.log(`\n${charater2.NOME} venceu a corrida! PARABÉNS! 🏆`);
  else console.log("A corrida  terminou em empate...");
}

(async function main() {
  console.log(
    `🏁🚦 CORRIDA ENTRE ${player1.NOME} E ${player2.NOME} COMEÇÃNDO...\n`,
  );

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
