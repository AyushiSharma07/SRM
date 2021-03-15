$(document).ready(function() {
    $('.search-icon').click(function() {
        $('.search-icon').toggleClass('active') //search icon change onClick
        $('.search-box').toggleClass('active') //box show when click on icon
        $('header').toggleClass('active-search') //In mobile logo and bars                                             hide when search box show

    })
});
/*sub-menu visible on click  */

$(document).ready(function() {
    $('ul li').click(function() {
        $(this).siblings().removeClass('active') //remove active 									class when click again

        $(this).toggleClass('active') //Add Active class first click



    })
});





$(document).ready(function() {
    $('.toggle').click(function() {
        $('.toggle').toggleClass('active') //change menu icon onClick

        $('header').toggleClass('active-menu') //hide logo and search 							icon when click on menu icon in mobile


    })
});