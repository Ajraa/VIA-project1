let slideIndex = 0;

window.addEventListener("load", function(e) {
    showSlides(slideIndex);
    const next = this.document.getElementById("next");
    console.log(next);
    next.addEventListener("click", function() {
        plusSlides(1);
    });
    const prev = this.document.getElementById("prev");
    prev.addEventListener("click", function() {
        plusSlides(-1);
    });

    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++)
    {
        slides[i].addEventListener("mouseover", function() {
            next.style.display = "none";
            prev.style.display = "none";
        });

        slides[i].addEventListener('mouseout', function() {
            next.style.removeProperty("display");
            prev.style.removeProperty("display");
        });
    }
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
}