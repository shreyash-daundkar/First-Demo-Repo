
// Editing new li by getElementsByClassName

const new_li_class = document.getElementsByClassName('new-class');
new_li_class[0].style.backgroundColor = 'green';

// Editing new li by getElementsByTagName

const li_elements = document.getElementsByTagName('li');
const text = li_elements[4].innerText;
li_elements[4].innerHTML = `<i>${text}</i>`;


