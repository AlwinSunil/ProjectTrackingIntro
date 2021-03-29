const screenWidth = screen.width;
console.log(screenWidth);

window.onload = function () {
  warningBanner();
  window.scrollTo(0, 0);
  document.getElementById("loader-wrapper").style.opacity = "0";
  document.getElementById("loader-wrapper").style.display = "none";
};

function navbarToggle() {
  document.getElementById("nav-mobile").style.display = "flex";
  document.getElementById("hamburger").style.display = "none";
  document.getElementById("close").style.display = "block";
}

function navbarClose() {
  document.getElementById("nav-mobile").style.display = "none";
  document.getElementById("hamburger").style.display = "block";
  document.getElementById("close").style.display = "none";
}

function warningBanner() {
  document.getElementById("warning-banner").style.display = "block";
  if (screenWidth < 750) {
    setTimeout(() => {
      document.getElementById("warning-banner").style.height = "10vh";
    }, 200);
  } else {
    setTimeout(() => {
      document.getElementById("warning-banner").style.height = "7.5vh";
    }, 200);
  }
  setTimeout(() => {
    document.getElementById("warning-banner-p").style.display = "block";
  }, 300);
}
