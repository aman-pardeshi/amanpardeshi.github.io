const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav_link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach (link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
});

// For sticky header
// var scroll_pos = 0;
// var scroll_time;

// $(window).scroll(function() {
//     clearTimeout(scroll_time);
//     var current_scroll = $(window).scrollTop();
    
//     if (current_scroll >= $('#topNav').outerHeight()) {
//         if (current_scroll <= scroll_pos) {
//             $('#topNav').removeClass('hidden');    
//         }
//         else {
//             $('#topNav').addClass('hidden');  
//         }
//     }
        
//     scroll_time = setTimeout(function() {
//         scroll_pos = $(window).scrollTop();
//     }, 100);
// });
