$('.sample-screen').magnifier({
  magnify: 4,
  region: {
    h: 38.7,
    w: 38.7
  },
  display: $('#display')
});

var modal = document.getElementById('signInModal');
var sinButton = document.getElementById('signinButton');
var closeButton = document.getElementsByClassName("close")[0];

sinButton.onclick = function() {
  modal.style.display = "block";
}

closeButton.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

$(".social").hover(function(){
  $(this).toggleClass("social--hover");
  });
$(".close").hover(function(){
  $(this).css('color', 'green').css('font-weight', 'bold')
  });
