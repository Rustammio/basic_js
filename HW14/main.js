$('.paralax').before('<button>hide</button>')
$(document).on('click', 'button.paralax', function(){
    $('.paralax').slideToggle(2000)
})





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


// $(function () {
//     $('a').on('click', function (e) {
//         $('html, body').animate({
//             scrollTop: $((this).attr('href').text())
//         })
//     })