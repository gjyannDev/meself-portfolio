let attractHover = document.querySelectorAll('.attract__hover');

attractHover.forEach( ( el ) => {
  el.addEventListener('mousemove', ( e ) => {
    let x = e.offsetX
    let y = e.offsetY
  
    let BoxWidth = el.clientWidth
    let BoxHeight = el.clientHeight
  
    let moveX = ( x - BoxWidth / 2 )
    let moveY = ( y - BoxHeight / 2 )
  
    el.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
  })

  
  el.addEventListener('mouseout', (e) => {
    el.style.transform = ``;
  })
})
