    
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('topnav');

    window.addEventListener('scroll', function () {
        
        if (window.scrollY > 0){
            navbar.classList.add('scrolled');
        }else{
            navbar.classList.remove('scrolled');
        }

    });
}); 

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('movieCarousel');
    const scrollAmount = 300; // Set the amount to scroll with each button click

    const scrollLeftButton = document.getElementById('scrollLeft');
    const scrollRightButton = document.getElementById('scrollRight');

    // Check if all elements exist to avoid errors
    if (carousel && scrollLeftButton && scrollRightButton) {
        scrollLeftButton.addEventListener('click', () => {
            carousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        scrollRightButton.addEventListener('click', () => {
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    } else {
        console.error('One or more elements are missing: movieCarousel, scrollLeft, scrollRight');
    }
});
    
// Event listener for when a carousel image is clicked
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.movie-item img').forEach(item => {
        item.addEventListener('click', function() {
            // Get the data attributes from the clicked image
            const trailerUrl = this.getAttribute('data-trailer');
            const movieTitle = this.getAttribute('data-title');
            const movieDescription = this.getAttribute('data-description');
            
            // Set the video source and description in the modal
            const videoElement = document.getElementById('trailerVideo');
    
            // Clear any existing child elements of the video
            videoElement.innerHTML = '';
    
            // Add a new <source> tag dynamically
            const videoSource = document.createElement('source');
            videoSource.src = trailerUrl;
            videoSource.type = 'video/mp4'; // Set video type
            videoElement.appendChild(videoSource);
    
            // Load and play the video
            videoElement.load(); // Load the new video source
            videoElement.play().catch(error => {
                console.error("Autoplay error:", error);
            });
            document.getElementById('movieTitle').textContent = movieTitle;
            document.getElementById('movieDescription').textContent = movieDescription;
            console.log(trailerUrl);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('trailerModal').addEventListener('hidden.bs.modal', function () {
        const videoElement = document.getElementById('trailerVideo');
        videoElement.pause();  // Pause the video
        videoElement.currentTime = 0;  // Reset video to the beginning
    });
    
});
// Close video and reset when the modal is closed

document.addEventListener("DOMContentLoaded", () => {
    const slide1 = document.getElementById("slide1");
    const slide2 = document.getElementById("slide2");
    slide1.classList.add("visible");
    slide2.classList.add("visible");
    // Observer to trigger the first animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                slide1.classList.add("active"); // Start the first animation
                observer.unobserve(slide1); // Stop observing after triggering animation
            }
        });
    });

    observer.observe(slide1);

    // Listen for when the first animation is halfway done
    slide1.addEventListener("animationstart", () => {
        // Start the second animation halfway through the first one
        setTimeout(() => {
            slide2.classList.add("active"); // Start the second animation
        }, 700); // Halfway through the 2s duration of the first animation
    });
});

