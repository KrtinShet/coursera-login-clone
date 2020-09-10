const bannerSection = document.getElementsByClassName('banner')[0];
const navbar = document.getElementsByClassName('navbar')[0];
const signuplogin = document.getElementById('signuplogin');
const closeModalBtn = document.getElementById('closeModalBtn');
const authModal = document.getElementById('authModal');
const authLogin = document.getElementById('auth-login');
const authSignup = document.getElementById('auth-signup');
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

const buildForm = function (formData) {
  let form = document.createElement('form');
  form.setAttribute('class', 'auth-form');
  form.innerHTML = formData;
  return form;
};

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
authLogin.addEventListener('click', function (e) {
  this.classList.add('active');
  authSignup.classList.remove('active');
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
});
authSignup.addEventListener('click', function (e) {
  this.classList.add('active');
  authLogin.classList.remove('active');
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});
