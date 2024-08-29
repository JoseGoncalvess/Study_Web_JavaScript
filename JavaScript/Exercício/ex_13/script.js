let bordVitual = [];
var turnPlay = "";
const boardRegions = document.querySelectorAll("#gameBoard span");

function Initialize() {
    bordVitual = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
      document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
      turnPlay = "Play1";
      playIsnow()
    boardRegions.forEach(function (region) {
        region.classList.remove("win")
        region.innerText = ""
        region.classList.remove()
        region.classList.add("cursor-pointer");
    region.addEventListener("click", jogadafeita);
  });
}

function disableregio(span) {
  span.classList.remove("cursor-pointer");
  span.removeEventListener("click", jogadafeita);
}

function jogadafeita(ev) {
  const span = ev.currentTarget;
  var region = span.dataset.region;
  const currentrow = region.split(".");

  const row = currentrow[0];
  const column = currentrow[1];

  if (turnPlay == "Play1") {
    span.innerHTML = "X"
    bordVitual[row][column] = "X";
  } else {
    span.innerHTML = "O"
    bordVitual[row][column] = "0";
  }
  console.clear();
  console.table(bordVitual);
  disableregio(span);

  isfinishin()

}

function playWiner(regions){
    regions.forEach(function (region) {
    document.querySelector(`[data-region="${region}"]`).classList.add("win")
        
    })
    const playerName = document.getElementById(turnPlay).value
  document.querySelector('h2').innerHTML = playerName + ' venceu!'

}


function isfinishin(){
    const winRegions = []
    if (bordVitual[0][0] && bordVitual[0][0] === bordVitual[0][1] && bordVitual[0][0] === bordVitual[0][2])
      winRegions.push("0.0", "0.1", "0.2")
    if (bordVitual[1][0] && bordVitual[1][0] === bordVitual[1][1] && bordVitual[1][0] === bordVitual[1][2])
      winRegions.push("1.0", "1.1", "1.2")
    if (bordVitual[2][0] && bordVitual[2][0] === bordVitual[2][1] && bordVitual[2][0] === bordVitual[2][2])
      winRegions.push("2.0", "2.1", "2.2")
    if (bordVitual[0][0] && bordVitual[0][0] === bordVitual[1][0] && bordVitual[0][0] === bordVitual[2][0])
      winRegions.push("0.0", "1.0", "2.0")
    if (bordVitual[0][1] && bordVitual[0][1] === bordVitual[1][1] && bordVitual[0][1] === bordVitual[2][1])
      winRegions.push("0.1", "1.1", "2.1")
    if (bordVitual[0][2] && bordVitual[0][2] === bordVitual[1][2] && bordVitual[0][2] === bordVitual[2][2])
      winRegions.push("0.2", "1.2", "2.2")
    if (bordVitual[0][0] && bordVitual[0][0] === bordVitual[1][1] && bordVitual[0][0] === bordVitual[2][2])
      winRegions.push("0.0", "1.1", "2.2")
    if (bordVitual[0][2] && bordVitual[0][2] === bordVitual[1][1] && bordVitual[0][2] === bordVitual[2][0])
      winRegions.push("0.2", "1.1", "2.0")
    
    if (winRegions.length > 0) {
       //MARCAS AS REGIÔES VENCEDORAS
       playWiner(winRegions)
       boardRegions.forEach(function (element) {
        element.removeEventListener('click', jogadafeita)
      })

    }else if (bordVitual.flat().includes("")) {
         turnPlay = turnPlay == "Play1" ? "Play2": "Play1"
         playIsnow()
    }else {
        document.querySelector('h2').innerHTML = ' A partida Deu Empate!'
      }


}

function playIsnow() {
    const inputplayer = document.getElementById(turnPlay)
    document.getElementById("turnPlayer").innerText = inputplayer.value
    
}

document.getElementById('start').addEventListener('click', Initialize)