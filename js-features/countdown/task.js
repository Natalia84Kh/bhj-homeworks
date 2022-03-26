function runTimer () {
    let timer = document.getElementById("timer");
let counter = Number(timer.textContent);

    if (counter !== 0){
        counter -= 1;
        timer.textContent = counter;
    } else {
        alert ("Вы победили в конкурсе!");
    }
};
setInterval (runTimer, 1000);
