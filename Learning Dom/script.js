
// Selecting elements.

const header = document.querySelector('#main-header');
const formTitle = document.querySelector('#form-title');

// Adding bottom border to our title.

header.style.borderBottom = '3px solid #000';

// Making form title bold and green.

const formTitleText = formTitle.innerText;
formTitle.innerHTML = `<b>${formTitleText}</b>`;
formTitle.style.color = 'green';