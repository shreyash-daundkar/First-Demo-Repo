
// Selecting Class

const list_group_item = document.getElementsByClassName('list-group-item');

// Making the 3 rd element in the list have green background color

list_group_item[2].style.backgroundColor = 'green';

// Making all element in list bold

Array.from(list_group_item).forEach(item => {
    const text = item.innerText;
    item.innerHTML = `<b>${text}</b>`;
});


