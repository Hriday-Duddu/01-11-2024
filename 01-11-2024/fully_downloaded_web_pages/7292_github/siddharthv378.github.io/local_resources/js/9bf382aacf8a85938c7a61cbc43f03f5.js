document.getElementById('signin-btn').addEventListener('click', function() {
    alert("Sign In button clicked. Redirect to login page.");
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Email submitted: ${email}`);
    } else {
        alert('Please enter a valid email');
    }
});
const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');
const scrollingWrapper = document.querySelector('.scrolling-wrapper');

scrollLeft.addEventListener('click', () => {
  scrollingWrapper.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
});

scrollRight.addEventListener('click', () => {
  scrollingWrapper.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});
