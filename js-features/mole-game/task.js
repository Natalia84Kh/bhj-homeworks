
const hole = (index) => document.getElementById(`hole${index}`);
let counterDeadMole = document.getElementById('dead');
let counterLost = document.getElementById('lost');
let counter = Number(counterLost.textContent);
let counterWin = Number(counterDeadMole.textContent);


const holeArr = document.querySelectorAll('.hole');
function click () {
  
    if(counterWin === 10 || counter === 5) {
        counter = 0;
        counterWin = 0;    
    }
    for (item of holeArr){
        if (item.className =".hole_has-mole"){
            counterWin += 1;
            counterDeadMole.textContent = counterWin;
        } else {
            counter += 1;
            counterLost.textContent = counter;
    }
//     if (hole(index).className = ".hole_has-mole"){
//         counterWin += 1;
//         counterDeadMole.textContent = counterWin;
//     } else {
//         counter += 1;
//         counterLost.textContent = counter;
// }
}

holeArr.forEach(item => item.onclick = click);
       


