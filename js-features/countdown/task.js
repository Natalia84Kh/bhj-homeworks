function runTimer () {
    let timer = document.getElementById("timer");
let counter = Number(timer.textContent);

    if (counter !== 0){
        counter -= 1;
        timer.textContent = counter;
    } else {
        clearInterval(id);
        alert ("Вы победили в конкурсе!");
    }
};
const id = setInterval (runTimer, 1000);
