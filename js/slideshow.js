
  //adding code for the slideshow of rubiks cube images
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

  window.onload = changeImg;