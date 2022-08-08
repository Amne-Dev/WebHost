resetbtn = document.getElementById("resetbtn");
document.documentElement.scrollTop = 0;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 600) {
    resetbtn.style.display = "block";
  } else {
    resetbtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}