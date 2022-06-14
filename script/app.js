const mobileNavPopup = document.querySelector('.mobile-nav-popup');

const navButtonElement = document.querySelector('.mobile-nav-btn');

function popupNav(){
    mobileNavPopup.classList.toggle('hidden');
}

navButtonElement.addEventListener('click', popupNav);
