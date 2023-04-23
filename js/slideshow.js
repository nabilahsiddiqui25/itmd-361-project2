
  /*//adding code for the slideshow of rubiks cube images
  var i = 0; //Starting point
  //array of images
  var images = [];
  var time = 3000;

  //Image List
  images[0] = 'media/rubiks1a.png';
  images[1] = 'media/rubiks2.png';
  images[2] = 'media/rubiks3.png';
  images[3] = 'media/rubiks4.png';
  images[4] = 'media/rubiks5.png';

  //Function to change image
  function changeImg() {
    //changes at index i
    document.slide.src = images[i];

    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }

    //setTimeout over here
    setTimeout("changeImg()", time);
  }

  window.onload = changeImg;*/

/*
const images = document.querySelectorAll(".slideshow img");
let currentImageIndex = 0;
const maxImageIndex = images.length - 1;

function nextImage() {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex = (currentImageIndex === maxImageIndex) ? 0 : currentImageIndex + 1;
  images[currentImageIndex].classList.add("active");
}

setInterval(nextImage, 3000);*/

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Add this code to automatically display the first slide
setTimeout(function() {
    plusSlides(1);
    }, 2000); // Change 2000 to the time in milliseconds you want to wait before displaying the first slide