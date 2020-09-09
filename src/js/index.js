const bannerSection = document.getElementsByClassName('banner')[0];
const navbar = document.getElementsByClassName('navbar')[0];
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= bannerSection.clientHeight - 50) {
    navbar.style.background = '#333';
  } else {
    navbar.style.background = 'transparent';
  }
});
