const bannerSection = document.getElementsByClassName('banner')[0];
const navbar = document.getElementsByClassName('navbar')[0];
const signuplogin = document.getElementById('signuplogin');
const closeModalBtn = document.getElementById('closeModalBtn');
const authModal = document.getElementById('authModal');
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= bannerSection.clientHeight - 50) {
    navbar.style.background = '#333';
  } else {
    navbar.style.background = 'transparent';
  }
});

closeModalBtn.addEventListener('click', function (e) {
  authModal.style.display = 'none';
});

signuplogin.addEventListener('click', function (e) {
  authModal.style.display = 'flex';
});
