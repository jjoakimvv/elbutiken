//slider startsida
var picPaths = ['./Bilder/iphone-airpods-big.jpg','./Bilder/imac-big.jpg'];

var imageIndex = 0;
var SlideBilder; 

function startInterval() {
 setInterval(displayNextImage, 5000);
}

function displayNextImage() {
  SlideBilder.src = picPaths[imageIndex];
  if(imageIndex === (picPaths.length-1)) {
    imageIndex = 0;
  }
  else {
    (imageIndex = imageIndex + 1);
  }
}

window.onload=function() {
 SlideBilder = document.getElementById('bildbyte');
 startInterval();
}