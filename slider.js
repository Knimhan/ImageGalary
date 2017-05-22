var images = [
  "http://lorempixel.com/600/350/?1",
  "http://lorempixel.com/600/350/?2",
  "http://lorempixel.com/600/350/?3",
  "http://lorempixel.com/600/350/?4",
  "http://lorempixel.com/600/350/?5",
  "http://lorempixel.com/600/350/?6",
  "http://lorempixel.com/600/350/?7",
  "http://lorempixel.com/600/350/?8",
  "http://lorempixel.com/600/350/?9",
  "http://lorempixel.com/600/350/?10",
];

var currentImageIndex;

function getImage(index) {
  currentImageIndex = index;
  document.image.src = images[index];
}

function next() {
  if(currentImageIndex == 9) {
    getImage(0);
  } else {
    getImage(currentImageIndex + 1);
  }
}

function prev() {
  if(currentImageIndex == 0) {
    getImage(9);
  } else {
    getImage(currentImageIndex - 1);
  }
}

function setPageNo() {
  document.getElementById("imageIndex").innerHTML = (currentImageIndex + 1) + '/10';  
}
