//Selecting navbar Dom elements
const nav = document.querySelector(".nav");
const toggleNav = document.querySelectorAll(".fa-solid");
const showIcon = document.querySelector(".show--nav");
const closeIcon = document.querySelector(".close--nav");

//Selecting input Dom elements
const error = document.querySelector(".error");
const input = document.querySelector("#input");
const btn = document.querySelector(".btn");

//toggle navbar on click
function openNav() {
  nav.classList.add("showMenu");
  closeIcon.style.display = "block";
  showIcon.style.display = "none";
}
function closeNav() {
  nav.classList.remove("showMenu");
  closeIcon.style.display = "none";
  showIcon.style.display = "block";
}

toggleNav.forEach((icons) => {
  icons.addEventListener("click", (e) =>
    e.target.classList.contains("show--nav") ? openNav() : closeNav()
  );
});

nav.addEventListener("click", closeNav);

//email verification on click
btn.addEventListener("click", () => {
  const email = input.value.toLowerCase();
  const emailRegex = /^[a-z]+\d+\@[a-z]+\.[a-z]{3}/gm;

  if (email.length === 0) {
    error.textContent = "email can not be empty";
  } else if (!emailRegex.test(email)) {
    error.textContent = "please enter a valid email address";
  } else {
    error.style.color = "#3CCF4E";
    error.textContent = "Thank You For Your Partronage.";
  }
});

//erasing the error msg with a click
input.addEventListener("click", () => (error.textContent = " "));
