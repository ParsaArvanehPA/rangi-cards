const wrapper = document.querySelector('.wrapper');
const addCardCta = document.querySelector('.add-card-cta');

let index = 6;
const sizes = ['کوچک', 'بزرگ', 'متوسط'];
const color = ['yellow', 'green', 'blue', 'purple', 'orange'];

const addNewCard = () => {
    const button = document.createElement('button');
    button.classList.add(color[Math.floor(Math.random() * color.length)]);
    button.innerHTML = `
        <span class="card-number">${index}</span>
        <span class="card-size">${sizes[Math.floor(Math.random() * sizes.length)]}</span>
    `;

    index++;
    wrapper.appendChild(button);
};

addCardCta.addEventListener('click', () => {
    addNewCard();
});
