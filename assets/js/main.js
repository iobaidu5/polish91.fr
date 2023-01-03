function reveal() {
  var reveals = document.querySelectorAll(".animate__animated");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      if(reveals[i].className.search('animDown') > 0)
      {
        reveals[i].classList.add("animate__backInDown");
      }else 
      {
        reveals[i].classList.remove("animate__backInDown");
      }

      if(reveals[i].className.search('animBounce') > 0)
      {
        reveals[i].classList.add("animate__bounceIn");
      }else 
      {
        reveals[i].classList.remove("animate__bounceIn");
      }
      

      if(reveals[i].className.search('animaUp') > 0)
      {
        reveals[i].classList.add("animate__backInUp");
      }else 
      {
        reveals[i].classList.remove("animate__backInUp");
      }


      if(reveals[i].className.search('animLeft') > 0)
      {
        reveals[i].classList.add("animate__backInLeft");
      }else 
      {
        reveals[i].classList.remove("animate__backInLeft");
      }

      if(reveals[i].className.search('animRight') > 0)
      {
        reveals[i].classList.add("animate__backInRight");
      }else 
      {
        reveals[i].classList.remove("animate__backInRight");
      }


    }
  }
}
  
  window.addEventListener("scroll", reveal);

// const car = document.getElementById("car_drive");
// let animationStarted = false;

// if(car){
//   var carY = car.getBoundingClientRect();

//   window.addEventListener("scroll", function() {
//     console.log(carY.top);
//     console.log(window.scrollY);
    
//     if(carY.top < window.scrollY < carY.bottom){
//       console.log("ok")
//     }

//     const distance = window.scrollY
//     car.style.transform = `translateX(${distance *
//       0.1}px)`
//   })
// }

function isInViewport(el) {
  if(el == undefined) return false;
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}


const car = document.getElementById('car_drive');

document.addEventListener('scroll', function () {
  if(isInViewport(car)){
    car.style.animation = 'car_drive .2s linear 1 forwards';
    // console.log('The car is visible in the viewport')
  } else {
    // console.log('The car is not visible in the viewport')
  }
})

$(document).ready(function () {
  $("li.active").removeClass("active");
  $('a[href="' + location.pathname + '"]')
    .closest("li")
    .addClass("active");
});

const nav = document.querySelector('.fixedNav');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('navbar-active');
    } else {
        nav.classList.remove('navbar-active');
    }
}