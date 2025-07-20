const informationButton = document.querySelector('.information-button');
const modalWrapper = document.querySelector('.modal-wrapper');
const closeButton = document.querySelector('.close-button');
const modalOverlay = document.querySelector('.modal-overlay');

informationButton.addEventListener('click', () => showModal(modalWrapper));
closeButton.addEventListener('click', () => hideModal(modalWrapper));
modalOverlay.addEventListener('click', () => hideModal(modalWrapper))

function showModal(modalWrapper) {
    if (modalWrapper.classList.contains('hidden')) {
        modalWrapper.classList.remove('hidden');
    }
}

function hideModal(modalWrapper) {
    if (!modalWrapper.classList.contains('hidden')) {
        modalWrapper.classList.add('hidden');
    }
}