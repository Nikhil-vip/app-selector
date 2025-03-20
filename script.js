let a = 0;

function select() {
  a++;
  // Toggle visibility of the boxes when the cube is clicked
  if (a % 2 === 0) {
    document.getElementById('box1').style.opacity = 1;
    document.getElementById('box2').style.opacity = 1;
    document.getElementById('box3').style.opacity = 1;
    document.getElementById('box4').style.opacity = 1;
  } else {
    document.getElementById('box1').style.opacity = 0;
    document.getElementById('box2').style.opacity = 0;
    document.getElementById('box3').style.opacity = 0;
    document.getElementById('box4').style.opacity = 0;
  }

  const button = document.getElementById('cube');
  button.style.transform = 'rotateY(45deg)';
  button.classList.toggle('pressed');  // Add a rotation effect when clicked
}

function selected1() {
  const box0 = document.getElementById('box0');
  box0.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Whatsapp'; // Change content to WhatsApp
}

function selected2() {
  const box0 = document.getElementById('box0');
  box0.innerHTML = '<i class="fa-brands fa-facebook"></i> Facebook'; // Change content to Facebook
}

function selected3() {
  const box0 = document.getElementById('box0');
  box0.innerHTML = '<i class="fa-brands fa-youtube"></i> Youtube'; // Change content to YouTube
}

function selected4() {
  const box0 = document.getElementById('box0');
  box0.innerHTML = '<i class="fa-brands fa-spotify"></i> Spotify'; // Change content to Spotify
}
