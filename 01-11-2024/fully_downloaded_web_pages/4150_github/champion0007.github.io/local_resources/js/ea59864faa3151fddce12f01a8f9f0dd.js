// FAQ Toggle Functionality
const faqBoxes = document.querySelectorAll('.faqbox');

faqBoxes.forEach(faq => {
  faq.addEventListener('click', () => {
    // Toggle the 'active' class to show/hide the FAQ content
    faq.classList.toggle('active');

    // Select the content inside and toggle its display
    const faqContent = faq.querySelector('.faq-content');
    if (faq.classList.contains('active')) {
      faqContent.style.display = 'block'; // Show content
    } else {
      faqContent.style.display = 'none';  // Hide content
    }
  });
});

// Language Selector Functionality
const languageSelector = document.getElementById('language-selector');

languageSelector.addEventListener('change', (event) => {
  const selectedLanguage = event.target.value;
  alert(`Language changed to: ${selectedLanguage}`);
  // You can load a different language's content here or redirect to a localized page.
});


// Form Submission Handling
const subscribeForm = document.getElementById('subscribe-form');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload

  const emailInput = document.getElementById('email-input').value;

  if (emailInput) {
    alert(`Subscription successful for: ${emailInput}`);
    // You can then send the email input to your backend server here using AJAX or Fetch API.
  } else {
    alert('Please enter a valid email address.');
  }
});


// Auto-play video functionality
const video = document.getElementById('preview-video');

// Ensures video starts muted and plays on load
window.addEventListener('load', () => {
  video.play();
});

// Add mute/unmute functionality on click
video.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false; // Unmute
  } else {
    video.muted = true;  // Mute
  }
});



// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  