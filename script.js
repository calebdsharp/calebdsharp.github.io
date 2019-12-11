console.log("hello, world!");


function lazyGrocerBg() {
  var x = document.getElementsByClassName('lazyGrocer');
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundSize = "cover";
    x[i].style.backgroundImage = "url('../images/lazyGrocer1.png')";
  }
}

function reviewSiteBg() {
  var x = document.getElementsByClassName('reviewSite');
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundSize = "cover";
    x[i].style.backgroundImage = "url('../images/reviewSite.png')";
  }
}

function virtualPetBg() {
  var x = document.getElementsByClassName('virtualPet');
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundSize = "cover";
    x[i].style.backgroundImage = "url('../images/petShelter1.png')";
  }
}

function fortuneTellerBg() {
  var x = document.getElementsByClassName('fortuneTeller');
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundSize = "cover";
    x[i].style.backgroundPosition = "center";
    x[i].style.backgroundImage = "url('../images/fortuneTeller.png')";
  }
}


function returnBg() {
  var x = document.getElementsByClassName('returnBg');
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundImage = "none";
    x[i].style.backgroundColor = "inherit";
  }
}
