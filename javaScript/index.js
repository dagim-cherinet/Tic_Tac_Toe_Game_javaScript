let player1 = true;

let dataSet = [[], [], []];
const handleClick = (element) => {
  if (player1) {
    element.innerText = "X";
    element.classList.add("player1");
    element.disabled = true;
    setDataSet(Number(element.id), "X");

    checkWinner("player 1");
    player1 = !player1;
  } else {
    element.innerText = "O";
    element.classList.add("player2");
    element.disabled = true;

    setDataSet(Number(element.id), "O");
    checkWinner("player 2");
    player1 = !player1;
  }
  console.log(dataSet);
  //let flattendArray = dataSet.flat(1);
  // console.log(flattendArray);
  //console.log(flattendArray.length);
};

const setDataSet = (input, txt) => {
  switch (input) {
    case 0:
      dataSet[0][0] = txt;
      break;
    case 1:
      dataSet[0][1] = txt;
      break;
    case 2:
      dataSet[0][2] = txt;
      break;
    case 3:
      dataSet[1][0] = txt;
      break;
    case 4:
      dataSet[1][1] = txt;
      break;
    case 5:
      dataSet[1][2] = txt;
      break;
    case 6:
      dataSet[2][0] = txt;
      break;
    case 7:
      dataSet[2][1] = txt;
      break;
    case 8:
      dataSet[2][2] = txt;
      break;
  }
};

const checkWinner = (playerName) => {
  if (
    (dataSet[0][0] == "X" || dataSet[0][0] == "O") &&
    dataSet[0][0] == dataSet[0][1] &&
    dataSet[0][1] == dataSet[0][2]
  ) {
    postWinner(playerName);
  } else if (
    (dataSet[1][0] == "X" || dataSet[1][0] == "O") &&
    dataSet[1][0] == dataSet[1][1] &&
    dataSet[1][1] == dataSet[1][2]
  ) {
    postWinner(playerName);
  } else if (
    (dataSet[2][0] == "X" || dataSet[2][0] == "O") &&
    dataSet[2][0] == dataSet[2][1] &&
    dataSet[2][1] == dataSet[2][2]
  ) {
    postWinner(playerName);
  } else if (
    (dataSet[0][0] == "X" || dataSet[0][0] == "O") &&
    dataSet[0][0] == dataSet[1][1] &&
    dataSet[1][1] == dataSet[2][2]
  ) {
    postWinner(playerName);
  } else if (
    (dataSet[0][2] == "X" || dataSet[0][2] == "O") &&
    dataSet[0][2] == dataSet[1][1] &&
    dataSet[1][1] == dataSet[2][0]
  ) {
    postWinner(playerName);
  } else if (
    (dataSet[0][0] == "X" || dataSet[0][0] == "O") &&
    dataSet[0][0] == dataSet[1][0] &&
    dataSet[1][0] == dataSet[2][0]
  ) {
    postWinner(playerName);
  } else if (
    (dataSet[0][1] == "X" || dataSet[0][1] == "O") &&
    dataSet[0][1] == dataSet[1][1] &&
    dataSet[1][1] == dataSet[2][1]
  ) {
    postWinner(playerName);
  } else if (
    (dataSet[0][2] == "X" || dataSet[0][2] == "O") &&
    dataSet[0][2] == dataSet[1][2] &&
    dataSet[1][2] == dataSet[2][2]
  ) {
    postWinner(playerName);
  } else if (dataSet.flat(1).length == 9) {
    console.log("draw");
    draw();
  }
};
const postWinner = (message) => {
  console.log(`${message} Won!!!`);
  const buttons = [...document.querySelectorAll("button")];
  buttons.map((singleBtn) => {
    singleBtn.disabled = true;
  });
  document.getElementById("reset").disabled = false;
  document.getElementById("reset").innerText = "Replay";
  const txt = document.createElement("h2");
  txt.innerText = `${message} Won!`;
  txt.classList.add("winner");
  document.querySelector(".outer__container").append(txt);
  document
    .querySelector(".outer__container")
    .classList.add("winner__container");
};
const draw = () => {
  const txt = document.createElement("h2");
  txt.innerText = "Draw replay";
  txt.classList.add("winner");
  document.querySelector(".outer__container").append(txt);
  document.querySelector(".winner__container").classList.add("draw__container");
  document.getElementById("reset").innerText = "Replay";
};
const reset = () => {
  dataSet = [[], [], [], [], [], [], [], [], []];
  const buttons = [...document.querySelectorAll("button")];
  buttons.map((single) => {
    single.innerText = "";

    single.disabled = false;
    single.classList.remove("player1");
    single.classList.remove("player2");

    player1 = true;
  });
  document.getElementById("reset").disabled = false;
  document.getElementById("reset").innerText = "Reset";
  document
    .querySelector(".outer__container")
    .classList.remove("winner__container");
  const winnerText = document.querySelector(".winner");
  if (winnerText) {
    winnerText.parentNode.removeChild(winnerText);
  }
};
