/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal" 
    и классом js-open-modal, модальное окно с классом modal, 
    должно появляться, тобишь необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (js-close-modal)
    или на серый фон с прозрачностью (js-modal-backdrop), 
    модальное окно должно закрываться.
    
  
  Задание повышеной сложности:
  - Попробуйте реализовать плагин функционала модального окна используя класс.
    При создании экземпляра необходимо передать селекторы для кнопки закрытия окна
    и самого прозрачного фона. Плагин должен реализовавать два метода show и hide,
    либо один toggle.
    
    При клике на кнопку показа модального окна должен вызываться 
    метод show или toggle. Соответственно при для закрытия 
    окна hide либо toggle.
*/

let openBtn = document.querySelector('.js-open-modal');

let modal = document.querySelector('.js-modal-backdrop');
let backdrop = document.querySelector('.js-modal-backdrop');

backdrop.addEventListener('click', closeModal);
openBtn.addEventListener('click', openModal);

function openModal(){
    modal.classList.remove('modal-hidden');
}

function closeModal(e){
    console.log(e);
    if(e.target.classList.contains('js-modal-backdrop') || e.target.classList.contains('js-close-modal') )
    modal.classList.add('modal-hidden');

}
