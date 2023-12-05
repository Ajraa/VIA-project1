let slideIndex = 0;
let timer;

window.addEventListener("load", function(e) {
    timer = setInterval(function() {
      plusSlides(1);
    }, 10000);
    showSlides(slideIndex);
    const next = this.document.getElementById("next");
    console.log(next);
    next.addEventListener("click", function() {
        clearInterval(timer);
        timer = setInterval(function() {
          plusSlides(1);
        }, 10000);
        plusSlides(1);
    });
    const prev = this.document.getElementById("prev");
    prev.addEventListener("click", function() {
        clearInterval(timer);
        timer = setInterval(function() {
          plusSlides(1);
        }, 10000);
        plusSlides(-1);
    });

    
});


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  var path = window.location.pathname;
  var page = path.split("/").pop();
  if(page != 'index.html')
    if (slides[slideIndex-1].firstElementChild instanceof HTMLImageElement) {
      slides[slideIndex-1].firstElementChild.src =  slides[slideIndex-1].firstElementChild.src + "?a=" + Math.random();
    }
    else {
      slides[slideIndex-1].firstElementChild.currentTime = 0;
      slides[slideIndex-1].firstElementChild.play();
    }
}

function setPrice(price) {
  localStorage.setItem("price", price);
}