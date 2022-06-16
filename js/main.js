(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        animateOut: 'fadeOutLeft',
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);



// adauga papagal

document.write('<script type="text/javascript">')
document.write(`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/61f41704b9e4e21181bc6727/1fqgnjqf3';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`);
document.write('</script>')

// adauga papagal





// insert without copypaste

let topbar = document.querySelector(".container-fluid.bg-light.p-0.wow.fadeIn");

let navBar = document.querySelector(".navbar.navbar-expand-lg.bg-white.navbar-light.sticky-top.p-0.wow.fadeIn");

let footer = document.querySelector(".footer");

let copyRight = document.querySelector(".copyRight");

topbar.innerHTML = `<div class="row gx-0 d-none d-lg-flex">
<div class="col-lg-7 px-5 text-start">
    <div class="h-100 d-inline-flex align-items-center py-3 me-4">
        <small class="fa fa-map-marker-alt text-primary me-2"></small>
        <small> (Dorobanţi - Perla) Str. Soseaua Stefan cel Mare Nr. 1-3
            Bucuresti Sector 1 </small>
    </div>
    <div class="h-100 d-inline-flex align-items-center py-3">
        <small class="far fa-clock text-primary me-2"></small>
        <small>
            Luni-Vineri
            9:00 - 17:00</small>
    </div>
</div>
<div class="col-lg-5 px-5 text-end">
    <div class="h-100 d-inline-flex align-items-center py-3 me-4">
        <small class="fa fa-phone-alt text-primary me-2"></small>
        <small>0737 129 122</small>
    </div>
    
</div>
</div>`;

navBar.innerHTML = `       <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5 logoPositionCenter">
<img src="img/Logo Dorobanti.png" id="logoNav" >
</a>
<button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
<span class="navbar-toggler-icon"></span>
</button>
<div style="background-color: white;" class="collapse navbar-collapse" id="navbarCollapse">
<div class="navbar-nav ms-auto p-4 p-lg-0">
    <a href="index.html" class="nav-item nav-link active">Home</a>
    <a href="/#despre" class="nav-item nav-link">Despre</a>
    <a href="/#servicii" class="nav-item nav-link">Servicii</a>
   
    <a href="contact.html" class="nav-item nav-link">Contact</a>
</div>
<a href="tel:0737129122" class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Programari<i class="fa fa-arrow-right ms-3"></i></a>
</div>`;

footer.innerHTML = `<div class="dateContact">
<h1 style="color: white;"> Date de contact:</h1>
<p> <i class="fas fa-map-marker-alt"></i>  Str. Ștefan cel Mare nr 1-3 <br> <span style="padding-left: 18px;">  bl. Perla SC. 2 Et. 3 ap. 54 Interfon 054, Bucuresti, Sector 1 <br><span style="padding-left: 18px;">(Dorobanţi - Perla)</span>  </span> </p>
<br><br>
<p> <i class="fas fa-phone-alt"></i> 0737 129 122 <br> <span style="padding-left: 20px;"> </span></p>
<br><br>
<a  href="mailto:consultatie@psyhology.ro" class="emailBox">
<i class="far fa-envelope" > </i> consultatie@psyhology.ro
</a>

</div>



<div  class="text">

<h1 style="color:white"> Informaţii utile:</h1>
<a  href="https://psyhology.ro/informatii-utlie.html#gdpr" >
     GDPR
</a>

<a  href="https://psyhology.ro/informatii-utlie.html#termenisiconditii" >
    Termeni Si Condiţii
</a>
<a  href="https://psyhology.ro/informatii-utlie.html#politicaconfidentialitate" >
    Politica de confidentialitate
</a>
<a  href="https://psyhology.ro/informatii-utlie.html#notainformare" >
    Nota de informare  
</a>
<a  href="https://psyhology.ro/informatii-utlie.html#cookies" >
    Politica de cookies 
</a>

</div>

<div class="map">
<h1 style="color: white;"> Unde ne gasiti? </h1>

<iframe id="map" style="border-radius: 5px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1423.9992325938!2d26.09809957205988!3d44.45370269630567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f8ac3ea4e307%3A0x529ef55b99bbfb6a!2s%C8%98oseaua%20%C8%98tefan%20cel%20Mare%201-3%2C%20Bucure%C8%99ti%20011736!5e0!3m2!1sen!2sro!4v1642773019509!5m2!1sen!2sro" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</div>`;

copyRight.innerHTML = ` <div class="logoFooter">
<img id="logo" alt="aviz" title="psiholog" src="img/Logo Dorobanti.png" style="width: auto; height: 130px;">
</div>
Copyright © 2022 
<br> <br>
<p style="font-weight: bold;font-size: 115%;"> Centrul De Evaluare Psihologica <br> "Dorobanţi - Perla"  </p> 
<br>
BUCURESTI SECTOR 1 `;

// insert without copypaste



// img add title and alt for seo

let imgsTags = document.querySelectorAll("img");

for(let i = 0; i<imgsTags.length; i++){

    imgsTags[i].alt = "psihoterapie online/ psiholog online";

    imgsTags[i].title = "psihoterapie online/ psiholog online";
    

}


// img add title and alt for seo


// phone logo

let logoOnPhone = document.querySelector(".navbar-toggler");

let deschis = false;

logoOnPhone.addEventListener("click", () =>{

    if(!deschis) {
        deschis = true;
    } else {
        deschis = false;
    }

    

    if(deschis) {

        document.querySelector(".logoPositionCenter").style.visibility = "hidden";
       
    } else {
        document.querySelector(".logoPositionCenter").style.visibility = "visible";
    }

})