const elementsMenuLink = document.querySelectorAll('.menu__link');
const elementMenuSub = document.querySelectorAll('.menu_sub');
let arrayMenuSub = Array.from(elementMenuSub);
let arrayMenuLink = Array.from(elementsMenuLink);
function subMenu (i){
    if(!arrayMenuLink[i].matches('a[href=""]')) {
        arrayMenuSub[i].className = 'menu_active';
    }
    
}
for(let i = 0; i < arrayMenuLink; i++) {
    arrayMenuLink[i].onclick = subMenu(i);
}