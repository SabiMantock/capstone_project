/* eslint-disable comma-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-return-assign */
/* eslint-disable quotes */

const body = document.getElementById("body");
const menuBtn = document.getElementById("menu-btn");
const navBar = document.getElementById("navbar");
const programList = document.getElementById("program-list");

const PROGRAM_DATA = [
  {
    image: "images/lecturer.png",
    title: "Lecture",
    info: "Lecture on the Future and Reality of Gaming",
  },
  {
    image: "images/dota.png",
    title: "Dota Event",
    info: "Watch gamers battle against each other",
  },
  {
    image: "images/chat.png",
    title: "Forum",
    info: "Have time to share you thoughts and opinions.",
  },
  {
    image: "images/market.png",
    title: "Market",
    info: "Opportunity to purchase limited items",
  },
  {
    image: "images/networking.png",
    title: "GG Party",
    info: "Get opportunities to team up with new players.",
  },
];

PROGRAM_DATA.map(
  (program) =>
    (programList.innerHTML += `<div class='program-item'>
  <div class='program-image'>
    <img src='${program.image}' alt='program-icon' />
  </div>
  <h3 class='program-item-title'>${program.title}</h3>
  <p class='program-item-subTitle'>
    ${program.info}
  </p>
</div>
`)
);

window.onload = () => {
  menuBtn.addEventListener("click", () => {
    if (menuBtn) {
      menuBtn.classList.toggle("change");
      navBar.classList.toggle("active");
      body.classList.toggle("active");
    }
    body.classList.add("inactive");
  });
};
