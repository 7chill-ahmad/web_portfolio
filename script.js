window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 5000) { // Sesuaikan angka sesuai keperluan
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });  
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.getElementById("opening-animation").classList.add("hidden");
    }, 2000); // Mengatur waktu animasi dalam milidetik
  });
  