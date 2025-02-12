const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener('click', function () {
        if (item.classList.contains('open')) {
            item.classList.remove('open');
        } else {
            item.classList.add('open');
        }
    });
});


