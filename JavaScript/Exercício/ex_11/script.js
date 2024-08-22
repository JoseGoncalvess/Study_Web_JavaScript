class Player {
  constructor(name, number, position) {
    this.name = name;
    this.number = number;
    this.position = position;
  }
}


function esclarToPlay() {
  let name = document.getElementById("name_play");
  let position = document.getElementById("position_team_play");
  let number = document.getElementById("number_tshit_play");

  if (name.value != "" && position.value != "" && number.value != "") {
    let listTeam = document.getElementById("list_of_team");
    const li = document.createElement("li");
    li.innerHTML = `<span id="info_to_play">${number.value} | ${position.value}</span><span id="name_to_play"> ${name.value} </span>`;

    listTeam.appendChild(li);
  }
}
function insertInput() {
  const ul = document.getElementById("list_of_team");
  const spanNumber = document.querySelectorAll('span')
  console.log(spanNumber)

  for (span of spanNumber){
    if (span.innerHTML.includes('20')) {
        print(spanNumber.values (span))
    }
  }
 
  
}

function removeToPlay() {}
