var currentSlide = 1;
window.addEventListener('load', function () {
    showSlides();
});

function plusOne() {
    if (currentSlide == 6) {
        currentSlide = 1;
    }
    else {
        currentSlide++
    }
    showSlides()
}
function minusOne() {
    if (currentSlide == 1) {
        currentSlide = 6;
    }
    else {
        currentSlide--
    }
    showSlides()
}
function clickSlide(slide) {
    if (currentSlide == slide) {
        alert("נמצא על התמונה הנוכחית")
    }
    else {
        currentSlide = slide;
        showSlides()
    }
}
function showSlides() {
    for (var i = 1; i < 7; i++) {
        var id = 'picture' + i;
        var id2 = 'smallPicture' + i;
        if (i == currentSlide) {
            document.getElementById(id).style.display = "inline-block";
            document.getElementById(id2).classList.add("active")
        } else {
            document.getElementById(id).style.display = "none";
            document.getElementById(id2).classList.remove("active");
        }
    }
}