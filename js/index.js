window.addEventListener("load", function(e) {
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