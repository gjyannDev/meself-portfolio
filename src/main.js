import '../styles/modernize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/services.css';
import '../styles/components/project.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/utility.css';
import '../src/attractHover.js';
import '../src/scrollAnimation.js';
// import '../src/imageHover.js';

let backToTop = document.querySelectorAll('.back__to-top');

backToTop.forEach( ( el ) => {
  el.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })  
});

var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
posY = 0,
mouseX = 0,
mouseY = 0;

TweenMax.to({}, 0.016, {
repeat: -1,
onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
        css: {
            left: posX - 20,
            top: posY - 20
        }
    });

    TweenMax.set(cursor, {
        css: {
            left: mouseX,
            top: mouseY
        }
    });
}
});

$(document).on("mousemove", function(e) {
mouseX = e.pageX;
mouseY = e.pageY;
});

$(".portfolio-item img").on("mouseenter", function() {
cursor.addClass("active");
follower.addClass("active");
});

$(".portfolio-item img").on("mouseleave", function() {
cursor.removeClass("active");
follower.removeClass("active");
});
