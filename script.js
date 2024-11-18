function showSlides() {
    let slideshows = document.querySelectorAll('.slideshow-container');
    
    slideshows.forEach(slideshow => {
        let slides = slideshow.getElementsByClassName('slide');
        for(let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
    });
    
    setTimeout(showSlides, 2000); 
}

let slideIndex = 0;
showSlides();