const stack = document.querySelector('.photo-stack');
const front = stack.querySelector('.photo-front');
const back = stack.querySelector('.photo-back');

stack.addEventListener('click', () => {
    front.classList.toggle('photo-front');
    front.classList.toggle('photo-back');
    back.classList.toggle('photo-front');
    back.classList.toggle('photo-back');
});
