let backToTop = document.querySelectorAll('.back__to-top');
backToTop.forEach( ( el ) => {
  el.addEventListener('click', () => {
    scrollTo(document.documentElement, 0, 1500);  
  })  
})

   
   function scrollTo(element, to, duration) {
       if (duration < 0) return;
       var difference = to - element.scrollTop;
       var perTick = difference / duration * 10;
       
       setTimeout(function() {
           element.scrollTop = element.scrollTop + perTick;
           scrollTo(element, to, duration - 10);
       }, 10);
   }
