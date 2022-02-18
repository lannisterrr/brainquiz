const icons = document.querySelectorAll('.far');

const modalButton = document.querySelectorAll('.button__cta');
const modal = document.querySelector('.modal-overlay');
const modalShow = document.querySelector('.show-modal');
const modalClose = document.querySelector('.close-modal');
const modalCloseButton = document.getElementById('modal-close-button');

function showModal() {
  modal.classList.add('show-modal');
}

modalCloseButton.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

icons.forEach(icon => {
  icon.addEventListener('click', () => icon.classList.toggle('fas'));
});

modalButton.forEach(button => {
  button.addEventListener('click', showModal);
});
