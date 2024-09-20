let currentPage = 1;
const totalPages = 10;

// Get references to the audio elements
const flipForwardSound = document.getElementById('flipForwardSound');
const flipBackwardSound = document.getElementById('flipBackwardSound');
const backgroundMusic = document.getElementById('backgroundMusic');

// Optionally, mute/unmute music
function toggleMusic() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    const currentPageElement = document.querySelector(`#page${currentPage}`);
    const nextPageElement = document.querySelector(`#page${currentPage + 1}`);

    // Flip the current page
    currentPageElement.style.transform = 'rotateY(-180deg)';
    currentPageElement.style.zIndex = totalPages - currentPage;

    currentPage++;  // Move to the next page

    // Play the forward flip sound
    flipForwardSound.play();

    updateButtonState();
  }
}

function previousPage() {
  if (currentPage > 1) {
    const previousPageElement = document.querySelector(`#page${currentPage}`);
    const currentPageElement = document.querySelector(`#page${currentPage - 1}`);

    // Flip the previous page back
    previousPageElement.style.transform = 'rotateY(0deg)';
    currentPageElement.style.zIndex = totalPages - (currentPage - 1);

    currentPage--;  // Move to the previous page

    // Play the backward flip sound
    flipBackwardSound.play();

    updateButtonState();
  }
}

function updateButtonState() {
  document.querySelector("#prevBtn").disabled = currentPage === 1;
  document.querySelector("#nextBtn").disabled = currentPage === totalPages;
}

updateButtonState();  // Initial button state check