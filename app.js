const navSlide = () => {
  const hamburger = document.querySelector('.hamburger');
  const nav =document.querySelector('.side-nav-links');

  hamburger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
  });


}
navSlide();
