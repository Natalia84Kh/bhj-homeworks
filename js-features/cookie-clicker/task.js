const img = document.getElementById("cookie");
let clickerCounter =  document.getElementById("clicker__counter");
function cookieClicker () {
    img.width = 100;
    let counter = Number(clickerCounter.textContent);
    counter += 1;
    clickerCounter.textContent = counter;

    img.width = 400;
};
img.onclick = cookieClicker;