window.addEventListener("load", function(e) {
    currentSlide(0);
});


function currentSlide(n) {
    console.log(n);
    let imgs = this.document.getElementsByClassName("iphone-img");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block";

    let dots = this.document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.border = "none";
    }
    dots[n].style.border = "1px solid black";
}