
window.onload = function () {
    document.addEventListener('click', documentActions)



    function documentActions(e) {
        const targetElement = e.target;

        if (window.innerWidth > 768) {
            if (targetElement.classList.contains('menu__arrow')) {
                targetElement.closest('.menu__item').classList.toggle('_hover')
            }
        }





        if (targetElement.classList.contains('search-form__icon')) {
            document.querySelector('.search-form').classList.toggle('_active')
        } else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
            document.querySelector('.search-form').classList.remove('_active')
        }

    }   //! функция, которая добавляет форму поиска при нажатии на лупу и убирает ее при нажатии на лупу или свободное поле





    //!  КОД ЧТОБЫ НАВЕСИТЬ ЗА ХЕДЕР ФОН ПРИ СКРОЛЛЕ
    //! сделать шапку с полупрозрачным бэкграундом при скролле

    const headerElement = document.querySelector('.header');

    const callback = function (entries, observer) {

        if (entries[0].isIntersecting) {
            headerElement.classList.remove('scroll')
        } else {
            headerElement.classList.add('scroll')
        }
    };

    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(headerElement);
};







$(document).ready(function () {
    $('.slider').slick({
        arrows: true, //false  //? стрелки
        dots: true, //false  //? точки

        appendArrows: $('.arrows-one'),
        appendDots: $('.dotts-one'), //? позволяет вывести в нужный div где бы они ни был стрелки и точки от слайдера

        variableWidth: true, //true //? возможность слайдов заполянть пространство между ними, не оставляя его пустым

    });

    $('.slider-rooms__body').slick({
        arrows: true, //false  //? стрелки
        dots: true, //false  //? точки

        appendArrows: $('.arrows-two'),
        appendDots: $('.dotts-two'), //? позволяет вывести в нужный div где бы они ни был стрелки и точки от слайдера

        variableWidth: true, //true //? возможность слайдов заполянть пространство между ними, не оставляя его пустым


    })
    $('.slider-tips__body').slick({
        arrows: true, //false  //? стрелки
        dots: true, //false  //? точки

        appendArrows: $('.arrows-three'),
        appendDots: $('.dotts-three'), //? позволяет вывести в нужный div где бы они ни был стрелки и точки от слайдера

        variableWidth: true, //true //? возможность слайдов заполянть пространство между ними, не оставляя его пустым

        slidesToShow: 3,


    })


});









