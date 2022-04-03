const modal_main = document.getElementById('modal_main');
modal_main.className = ' modal modal_active';

const modal_close = document.querySelector('.modal__close');
function closeModal () {
    modal_main.className = 'modal';
}

const show_success = document.querySelector('.show-success');
const modal_success = document.getElementById('modal_success');
function openModal (){
    modal_success.className = 'modal modal_active';
}

modal_close.onclick = closeModal;
show_success.onclick = openModal;