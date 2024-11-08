// if (window.matchMedia('(max-width: 768px)').matches) {
//     $(".title").on('click', function () {
//         var el = $(this).next(".list-item");
//         // (el.is(':visible'))
//         el.slideToggle();
//         $(this).toggleClass("addis");

//     });
// } else {
//     $(".footer-links-wrapper h3.list-item").slideDown();


// $(document).ready(function () {
//     $(".title").on("click", function () {
//         $(".list-item").slideToggle();

//     });
// });
// function hideMenu(plus) {
//     $(plus).find(".list-item").slideUp();
//     $(plus + "list-item").slideDown;

// }
// function showMenu(plus) {
//     $(plus).find(".list-item").slideDown();
//     $(plus * "list-item").slideDown;

//////////////////////////////////////////////////////////////////////////////////

if ($(window).width() <= 768) {
    $('.footer-links-wrapper').addClass('someClass');
} else {
    $('.footer-links-wrapper').removeClass('someClass');
}
$(window).on('resize', function () {
    if ($(window).width() <= 768) {
        $('.footer-links-wrapper').addClass('someClass');
    } else {
        $('.footer-links-wrapper').removeClass('someClass');
        $('.footer-links-wrapper ul').show();
    }
});
// Footer collapse functionality
$(document).on('click', '.someClass h3', function () {
    $(this).next('ul').slideToggle();
    // $(this).toggleClass('expanded');
    $(this).toggleClass('addis');
});
// if ($(window).width() <= 768) {
//     $('.footer-links-wrapper').addClass('someClass');
// } else {
//     $('.footer-links-wrapper').removeClass('someClass');
// }
// $(window).on('resize', function (event) {
//     if ($(window).width() <= 768) {
//         $('.footer-links-wrapper').addClass('someClass');
//     } else {
//         $('.footer-links-wrapper').removeClass('someClass');
//         $('.footer-links-wrapper ul').show();
//     }
// });
// // Footer collapse functionality
// $(document).on('click', '.someClass h3', function () {
//     $(this).next('ul').slideToggle();
//     // $(this).toggleClass('expanded');
//     $(this).toggleClass('addis');
// });


// $(".title").html((ui.value > 0 ? '+' : '') + ui.value);

