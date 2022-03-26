// function getHole(index) {
//     return document.getElementById(`hole${index}`);
// }
// const hole = getHole;

// function click () {
//     let counterDeadMole = document.getElementById('dead');
// let counterLost = document.getElementById('lost');
// let counter = Number(counterLost.textContent);
// let counterWin = Number(counterDeadMole.textContent);

//     getHole();
//     while(counterWin < 10 || counter < 5) {
//         if (hole.className = "hole"){
//             counter += 1;
//             counterLost.textContent = counter;
//           } else {
//             counterWin += 1;
//             counterDeadMole.textContent = counterWin;
   
//         };

//     }
     
//  }
const hole = (index) => document.getElementById(`hole${index}`);

function click () {
    let counterDeadMole = document.getElementById('dead');
    let counterLost = document.getElementById('lost');
    let counter = Number(counterLost.textContent);
    let counterWin = Number(counterDeadMole.textContent);


    while(counterWin < 10 || counter < 5) {

        if (hole.className = "hole"){
            counter += 1;
            counterLost.textContent = counter;
          } else {
            counterWin += 1;
            counterDeadMole.textContent = counterWin;
   
        };
    counter = 0;
    counterWin = 0;    
    }

       
}

 hole(5).onclick = click; 