// making second items background green

const secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

// making third elements invisible

const thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'hidden';

// making second element color green and making all odd elements background green

const elements = document.querySelectorAll('.list-group-item');
elements[1].style.color = 'green';
elements.forEach((x, i) => {
    if(i % 2 == 0) return
    x.style.backgroundColor = 'green';
})

