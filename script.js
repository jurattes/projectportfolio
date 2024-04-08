// DOM
$(document).ready(function () {
    $(window).scroll(function () {
    if (this.scrollY > 20) {
    $('.navbar').addClass("sticky");
    $('#background').css({
       'display': 'block',
       'display': 'none' 
    });
    
    } else {
    $('.navbar').removeClass("sticky");
    $('#background').css({
        'display': 'block',
     });
    }
    if (this.scrollY > 500) {
        $('.scroll-up').addClass("show");
    } else {
        $('.scroll-up').removeClass("show");
    } 
});

// Toggle light/dark mode
$("#background").on("click", function(){
    let image = $('#background').attr('src');
    if (image === 'Images/night-mode.svg'){
        $('#background').attr('src', 'Images/light-mode.svg')
        $('body').addClass('dark-mode').removeClass('light-mode'); 
    } else{
        $('#background').attr('src', 'Images/night-mode.svg')
        $('body').addClass('light-mode').removeClass('dark-mode');
}
});


$(document).on('submit','#form', function(e) {
    e.preventDefault(); // Prevent form submission

    let isValid = true;

    // Form Validation
    // Name Validation
    let name = $('#name').val().trim();
    if (name === '') {
        $('#nameError').text('Invalid name.').show();
        $('#name').css({
            'border': 'solid red 3px'
        });
        isValid = false;
    } else {
        $('#nameError').hide();
        $('#name').css({
            'border': '1px solid #ccc'
        });
    }

    // Email Validation
    let email = $('.email').val().trim();
    if (email === '') {
        $('#emailError').text('Invalid email.').show();
        $('#email').css({
            'border': 'solid red 3px'
        });
        isValid = false;
    } else {
        $('#emailError').hide();
        $('#email').css({
            'border': '1px solid #ccc'
        });
    }

    // Email Regex Validation
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
        $('#emailError').text('Invalid email address.').show();
        $('#email').css({
            'border': 'solid red 3px'
        });
        isValid = false;
    } else  {
        $('#emailError').hide();
        $('#email').css({
            'border': '1px solid #ccc'
        });
    }

    // Surname Validation
    let surname = $('#surname').val().trim();
    if (surname === '') {
        $('#surnameError').text('Invalid surname.').show();
        $('#surname').css({
            'border': 'solid red 3px'
        });
        isValid = false;
    } else {
        $('#surnameError').hide();
        $('#surname').css({
            'border': '1px solid #ccc'
        });
    }

    // Textbox Validation
    let textbox = $('#textbox').val().trim();
    if (textbox === '') {
        $('#textboxError').text('Enter a message.').show();
        $('#textbox').css({
            'border': 'solid red 3px'
        });
        isValid = false;
    } else {
        $('#textboxError').hide();
        $('#textbox').css({
            'border': '1px solid #ccc'
        });
    }

    // Checks if isValid = true
    if (isValid) {
        // Variables
        let Name = name;
        let Email = email;
        let Surname = surname;
        let TextBox = textbox;
        let text = `
        Is the following information valid:
            Your name: ${Name}
            Your email: ${Email}
            Your surname: ${Surname}
            Your message: ${TextBox}
        `;
        let info = `
        Name: ${Name}
        Email: ${Email}
        Surname: ${Surname}
        Message: ${TextBox}
        `;

        // Creates text file and appends info to file
        if (confirm(text)) {
        const blob = new Blob([info], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const a = $("<a>")
            .attr("href", url)
            .attr("download", "info.txt")
            .appendTo("body");
        a[0].click();
        URL.revokeObjectURL(url);
        a.remove();
        }
    } 
       

});

// Scroll up button
$(".scroll-up").on("click", function(){
    $(window).scrollTop(0); 
});

// Name Options
var nameOptions = {
    strings: ["LaSalle College Student Developer", "Front-end Developer", "programmer in HTML, Java, CSS, JQuery"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1500,
    loop: true
};
let nameText = new Typed(".text-3 span", nameOptions);

// About Options
var aboutOptions = {
    strings: ["HTML", " CSS", "JavaScript", "PHP", "JQuery"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1500,
    loop: true
}
let aboutText = new Typed(".about .right .text span", aboutOptions);

// Owl Carousel (Team)
$('.owl-carousel').owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPauser: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
}); 

});


   
