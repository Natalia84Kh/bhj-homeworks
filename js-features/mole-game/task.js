
const hole = (index) => document.getElementById(`hole${index}`);
let counterDeadMole = document.getElementById('dead');
let counterLost = document.getElementById('lost');
let counter = Number(counterLost.textContent);
let counterWin = Number(counterDeadMole.textContent);

let holeArr = [];
function creationHoleArr () {
    for (let i = 1; i <= 9; i++) {
        holeArr.push(hole(i));
    }
}

function click () {
    holeArr = [];
creationHoleArr();
    if(counterWin === 10 || counter === 5) {
        counter = 0;
        counterWin = 0;    
    }
    
    if (hole(index).className = "hole"){
        counter += 1;
        counterLost.textContent = counter;
    } else {
        counterWin += 1;
        counterDeadMole.textContent = counterWin;
   
}
}

holeArr.forEach(item => item.onclick = click);
       


