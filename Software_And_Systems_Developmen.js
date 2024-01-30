const carousel1 = document.querySelector('.carousel');
const images1 = carousel1.querySelectorAll('img');

const carousel2 = document.querySelector('.carousel');
const images2 = carousel2.querySelectorAll('img');


let currentIndex = 0;


carousel1.querySelector('.prev').addEventListener('click', () => {
   currentIndex--;
   if (currentIndex < 0) {
     currentIndex = images1.length - 1;
   }
   updateCarousel();
 });
  carousel1.querySelector('.next').addEventListener('click', () => {
 currentIndex++;
 if (currentIndex > images1.length - 1) {
  currentIndex = 0;
 }
   updateCarousel1();
 }); 


 function updateCarousel1() {
   images1.forEach((image, index) => {
     if (index === currentIndex) {
       image.style.display = 'block';
     } else {
       image.style.display = 'none';
     }
   });
 }




 carousel2.querySelector('.prev').addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images2.length - 1;
  }
  updateCarousel();
});
 carousel2.querySelector('.next').addEventListener('click', () => {
currentIndex++;
if (currentIndex > images2.length - 1) {
 currentIndex = 0;
}
  updateCarousel2();
}); 


function updateCarousel2() {
  images2.forEach((image, index) => {
    if (index === currentIndex) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}




function toggleClassDetails(classId) {
   const classDesc = document.querySelector(`.${classId} .classDescription`);
   classDesc.style.display = classDesc.style.display === 'none' ? 'block' : 'none';
}


document.getElementById('morebutton1').addEventListener('click', function() {
   toggleClassDetails('classesOdd');
});


document.getElementById('morebutton2').addEventListener('click', function() {
   toggleClassDetails('classesEven');
});


window.addEventListener('scroll', function () {
 const navigation = document.getElementById('navigation');
 const scrollPosition = window.scrollY;


 if (scrollPosition > 0) {
   navigation.classList.add('sticky');
 } else {
   navigation.classList.remove('sticky');
 }
});



