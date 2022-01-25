
$(document).ready(function(){
    $('.navbar__burger').click(function (event) {
        $('.navbar__burger, .navbar__list').toggleClass('active')
        $('.header:before').css('top', '-100%')
    })
})