
const primaryNav =document.querySelector(".onglets");
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener('click',() => {
  const visibility = primaryNav.getAttribute('data-visible');
 /* console.log(visibility);*/
  if (visibility==="false"){
      primaryNav.setAttribute('data-visible', true);
      navToggle.setAttribute('aria-expanded',true);
  }else if(visibility==="true"){
    primaryNav.setAttribute('data-visible', false);
     navToggle.setAttribute('aria-expanded',false);
  }
});





/*const navSlide =()=>{
    const burger= document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    burger.addEventListener('click',( )=>{
        nav.classList.toggle('onglets');
    });
}
navSlide();*/