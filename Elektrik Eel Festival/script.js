$(document).ready(function() {
    // Hamburger Menu Toggle
    $('.hamburger-menu').click(function() {
        $('.hamburger-menu').toggleClass('active');
        $('.sidebar').toggleClass('active');
    });

    // Close sidebar when clicking a link
    $('.sidebar-links a').click(function() {
        $('.hamburger-menu').removeClass('active');
        $('.sidebar').removeClass('active');
    });

    // Smooth scrolling for internal links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });
});
