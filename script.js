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

$("#background").on("click", function(){
    var currentimg = $('#background').attr('src');
if (currentimg === 'Images/moon-stars.svg'){
    $('#background').attr('src', 'Images/light-mode.svg')
    $('body').addClass('dark-mode').removeClass('light-mode'); 
}
else{
    $('#background').attr('src', 'Images/moon-stars.svg')
    $('body').addClass('light-mode').removeClass('dark-mode');
}
});

$(document).on('submit','#form', function(e) {
    e.preventDefault(); // Prevent form submission

    let isValid = true;

    let name = $('#name').val().trim();
    if (name.trim() === '') {
        $('#errorName').text('Invalid name.').show();
        $('#name').css({
            'border': 'solid red 2px'
        });
        isValid = false;
    } else {
        $('#errorName').hide();
        $('#name').css({
            'border': '1px solid #ccc'
        });
    }

    let email = $('.email').val().trim();
    if (email.trim() === '') {
        $('#errorEmail').text('Invalid email.').show();
        $('#email').css({
            'border': 'solid red 2px'
        });
        isValid = false;
    } else {
        $('#errorEmail').hide();
        $('#email').css({
            'border': '1px solid #ccc'
        });
    }

    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
        $('#errorEmail').text('Invalid email address.').show();
        $('#email').css({
            'border': 'solid red 2px'
        });
        isValid = false;
    } else  {
        $('#errorEmail').hide();
        $('#email').css({
            'border': '1px solid #ccc'
        });
    }

    let surname = $('#surname').val().trim();
    if (surname.trim() === '') {
        $('#errorSurname').text('Invalid surname.').show();
        $('#surname').css({
            'border': 'solid red 2px'
        });
        isValid = false;
    } else {
        $('#errorSurname').hide();
        $('#surname').css({
            'border': '1px solid #ccc'
        });
    }

    let textbox = $('#textbox').val().trim();
    if (textbox.trim() === '') {
        $('#errorTextBox').text('Enter a message.').show();
        $('#textbox').css({
            'border': 'solid red 2px'
        });
        isValid = false;
    } else {
        $('#errorTextBox').hide();
        $('#textbox').css({
            'border': '1px solid #ccc'
        });
    }

    // Checks if isValid = true
    if (isValid) {
        // Variables
        const Name = name;
        const Email = email;
        const Surname = surname;
        const TextBox = textbox;
        const text = `
        Is this your information? 
            Your name: ${Name}
            Your email: ${Email}
            Your surname: ${Surname}
            Your message: ${TextBox}
        `;
        const fileinfo = `
        Your name: ${Name}
        Your email: ${Email}
        Your surname: ${Surname}
        Your message: ${TextBox}
        `;

        // Creates text file and appends info to file
        if (confirm(text)) {
        const blob = new Blob([fileinfo], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const a = $("<a>")
            .attr("href", url)
            .attr("download", "user_data.txt")
            .appendTo("body");
        a[0].click();
        URL.revokeObjectURL(url);
        a.remove();
        }
    } 
       

});

var options = {
    strings: ["LaSalle College Student Developer", "Front-end Developer", "programmer in HTML, Java, CSS, JQuery"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1500,
    loop: true
};

var typed = new Typed(".text-3 span", options);
var typer = new Typed(".about .right .text span", options);


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

// Scroll up button
$(".scroll-up").on("click", function(){
    var y = $(window).scrollTop();
    var x = y +1;
    $(window).scrollTop(y - x); 
});
});


   