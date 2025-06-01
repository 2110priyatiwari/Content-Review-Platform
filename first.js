const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
// JavaScript to control arrow scrolling
const cardContainer = document.getElementById('card-container');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

leftArrow.addEventListener('click', () => {
    cardContainer.scrollBy({
        left: -300, // Adjust the number to scroll left
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    cardContainer.scrollBy({
        left: 300, // Adjust the number to scroll right
        behavior: 'smooth'
    });
});

const video = document.getElementById('background-video');
const audio = document.getElementById('background-audio');

// Play both video and audio when they are ready
video.oncanplay = () => {
    audio.play();
};


const backgroundVideo = document.getElementById('background-video');
    const soundButton = document.getElementById('sound-btn');

    // Toggle video sound on/off
    function toggleVideoSound() {
      if (backgroundVideo.muted) {
        backgroundVideo.muted = false; // Unmute the video
        soundButton.textContent = '🔊'; // Change the button icon to "sound on"
      } else {
        backgroundVideo.muted = true; // Mute the video
        soundButton.textContent = '🔇'; // Change the button icon to "sound off"
      }
    }



    function openLoginModal() {
        document.getElementById('loginModal').style.display = 'flex'; // Show modal
      }
      
      // Function to close the login modal
      function closeLoginModal() {
        document.getElementById('loginModal').style.display = 'none'; // Hide modal
      }
      
      // Close the modal when clicking outside of it
      window.onclick = function(event) {
        const modal = document.getElementById('loginModal');
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      };