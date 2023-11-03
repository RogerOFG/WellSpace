//!---| INICIO MENU
let list = document.querySelectorAll('nav ul li a');
let select = document.querySelectorAll('nav ul li');

list.forEach(function (item) {
    item.addEventListener('click', function () {
        list.forEach(function (list) {
            list.classList.remove('active');
        });

        item.classList.add('active');
    });
});

select.forEach(function (item) {
    item.addEventListener('click', function () {
        select.forEach(function (select) {
            select.classList.remove('select');
        });

        item.classList.add('select');
    });
});
//TODO: FIN MENU ---|