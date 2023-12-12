 const slideUp = new IntersectionObserver( (entries) => {
    entries
    .filter( e => e.isIntersecting )
    .forEach( ( entry ) => {
      entry.target.classList.add('slideUp');
      slideUp.unobserve(entry.target);
    });
 });

 const bounceTop = new IntersectionObserver( (entries) => {
    entries
    .filter( e => e.isIntersecting )
    .forEach( ( entry ) => {
      entry.target.classList.add('bounceTop');
      bounceTop.unobserve(entry.target);
    });
 });

 const fadeInBackward = new IntersectionObserver( (entries) => {
    entries
    .filter( e => e.isIntersecting )
    .forEach( ( entry ) => {
      entry.target.classList.add('fadeInTop');
      fadeInBackward.unobserve(entry.target);
    });
 });

 const slideUpElements = document.querySelectorAll('.slide-up');
 const bounceTopElements = document.querySelectorAll('.bounce-top');
 const fadeInBackwardElements = document.querySelectorAll('.fade-In-Top');

 slideUpElements.forEach( ( el ) => slideUp.observe( el ))
 bounceTopElements.forEach( ( el ) => bounceTop.observe( el ))
 fadeInBackwardElements.forEach( ( el ) => fadeInBackward.observe( el ))
