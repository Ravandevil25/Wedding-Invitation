(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

// Music control
const audioElement = document.getElementById("my_audio");
const playPauseButton = document.getElementById("play-pause-button");
let isPlaying = false;

// Function to toggle play/pause
function togglePlay() {
    if (isPlaying) {
        audioElement.pause();
        playPauseButton.innerHTML = '<i class="fas fa-music"></i>';
        playPauseButton.classList.remove('playing');
    } else {
        audioElement.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        playPauseButton.classList.add('playing');
    }
    isPlaying = !isPlaying;
}

// Play music on first click anywhere on the document
$(document).one('click', function(){
    togglePlay();
    console.log('Shaadi me zaroor aana');
});

// Play/pause button click handler
playPauseButton.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent document click from firing
    togglePlay();
});

// Initialize LightGallery for photo gallery
if (document.getElementById('lightgallery')) {
    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        download: false,
        counter: false
    });
}

// RSVP Form Submission
const rsvpForm = document.getElementById('rsvp-form');
if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const attending = document.getElementById('attending').value;
        const guests = document.getElementById('guests').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send this data to a server
        // For now, we'll just show a thank you message
        rsvpForm.innerHTML = `
            <div class="thank-you-message">
                <h3>Thank You, ${name}!</h3>
                <p>We have received your RSVP and look forward to celebrating with you.</p>
                <p>We'll be in touch if we need any additional information.</p>
            </div>
        `;
        
        console.log('RSVP Submitted:', { name, email, phone, attending, guests, message });
    });
}

// Set the date we're counting down to
var countDownDate = new Date("May 10, 2025 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

// Animate sections when they come into view
function animateSectionsOnScroll() {
    const sections = document.querySelectorAll('.events-timeline, .gallery-section, .rsvp-section, .social-share');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    animateSectionsOnScroll();
});

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 10th May, 2025!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Saurav Kumar', styles1, styles2);

console.log(
    `%cShaadi me zaroor aana!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)




