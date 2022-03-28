const img = document.getElementById("cookie");
let clickerCounter =  document.getElementById("clicker__counter");
function cookieClicker () {
    if (img.width > 200){
        img.width = 100;
    } else{
        img.width = 400;
    }
    let counter = Number(clickerCounter.textContent);
    counter += 1;
    clickerCounter.textContent = counter;
};
img.onclick = cookieClicker;