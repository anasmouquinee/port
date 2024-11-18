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
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - sectionHeight/3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});
