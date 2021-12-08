function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
$(document).ready(function () {
    $("#myDropdown").on("click", "a", function (event) {
        event.preventDefault();
        const id = $(this).attr('href');
        const top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });
});


$(document).ready(function(){
  $('.hide').on("click", function(){
      $('.paralax').toggle('hidden');
  })
})
$('#top').hide()
$(window).scroll(function () {

    if ($(window).scrollTop() < 500){
        $('#top').hide();
    } if ($(window).scrollTop() > 500){
        $('#top').show();
    }
})
$('#top').ready(function () {
    $('#top').on('click', function (){
        $('body,html').animate({scrollTop: 0}, 2000)
    }
    )
})