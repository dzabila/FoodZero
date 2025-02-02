function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// ფუნქცია cookie-ს დასაყენებლად
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // დღეები მილიწამებში
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}


const cookieNotification = document.getElementById('cookieNotification');
const acceptCookiesButton = document.getElementById('acceptCookies');


if (getCookie('cookiesAccepted') === 'true') {
  cookieNotification.classList.add('hidden'); 
}


acceptCookiesButton.addEventListener('click', () => {
  setCookie('cookiesAccepted', 'true', 30); 
  cookieNotification.classList.add('hidden'); 
});
//burger bar
var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

function scrollToTop() {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
}
//api
const description = document.querySelector(
  ".section__four--project--paragraph"
);
const description2 = document.querySelector(
  ".section__four--project--paragraph2"
);
const description3 = document.querySelector(
  ".section__four--project--paragraph3"
);
const description4 = document.querySelector(
  ".section__four--project--paragraph4"
);
const image = document.querySelector(".section__four--project");
const image2 = document.querySelector(".section__four--project2");
const image3 = document.querySelector(".section__four--project3");
const image4 = document.querySelector(".section__four--project4");
let requist = new XMLHttpRequest();
requist.open("GET", "https://reqres.in/api/users?page=2");
requist.addEventListener("load", function () {
  let response = this.response;
  let responseData = JSON.parse(response);
  description.textContent = `Author: ${responseData.data[0].first_name} ${responseData.data[0].last_name}`;
  description2.textContent = `Author: ${responseData.data[1].first_name} ${responseData.data[1].last_name}`;
  description2.style.color = "white";
  description2.style.fontSize = "20px";
  description3.textContent = `Author: ${responseData.data[2].first_name} ${responseData.data[2].last_name}`;
  description3.style.color = "white";
  description3.style.fontSize = "20px";
  description4.textContent = `Author: ${responseData.data[3].first_name} ${responseData.data[3].last_name}`;
  description4.style.color = "white";
  description4.style.fontSize = "20px";
});
requist.addEventListener("error", function () {
  console.log("error");
});
requist.send();
let requist1 = new XMLHttpRequest();
requist1.open("GET", "https://reqres.in/api/unknown");
requist1.addEventListener("load", function () {
  let response = this.response;
  let responseData = JSON.parse(response);
  image.style.backgroundColor = responseData.data[0].color;
  image2.style.backgroundColor = responseData.data[1].color;
  image3.style.backgroundColor = responseData.data[2].color;
  image4.style.backgroundColor = responseData.data[3].color;
});
requist1.addEventListener("error", function () {
  console.log("error");
});
requist1.send();

// form vadlidation
