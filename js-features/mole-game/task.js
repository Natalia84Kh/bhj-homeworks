
const hole = (index) => document.getElementById(`hole${index}`);
let counterDeadMole = document.getElementById('dead');
let counterLost = document.getElementById('lost');
let counter = Number(counterLost.textContent);
let counterWin = Number(counterDeadMole.textContent);


const allHole = document.querySelectorAll('.hole');
let holeArr = Array.from(allHole);
function click (i) {
    if(counterWin === 10 || counter === 5) {
        counter = 0;
        counterWin = 0;    
    }
    if (holeArr[i].className === 'hole hole_has-mole'){
            counterWin += 1;
            counterDeadMole.textContent = counterWin;
        } else {
            counter += 1;
            counterLost.textContent = counter;
        }    
}
 for (let i = 0; i < 10; i++) {
    holeArr[i].onclick = click(i);
 }
