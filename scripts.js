/* eslint-disable no-unused-expressions */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-plusplus */
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
const featuredList = document.getElementById("featured-list");
const featuredBtn = document.getElementById("featured-btn");
("featured-btn-less");
let items = 2;

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

const SPEAKERS_DATA = [
  {
    image: "images/bb.png",
    name: "Brandon Beck",
    occu: "Co-founder & co-chairman of riot games",
    info: " A lifelong gamer, Brandon Beck cofounded Riot Games in 2006 with a vision for a game that would become League of Legends and a game company that would redefine the way video games are developed,delivered, and supported for players.",
  },
  {
    image: "images/gabe-1.jpg",
    name: "Gabe Newell",
    occu: "Co-founder & President, Valve",
    info: " Newell led development of Valve's digital distribution service Steam, which launched in 2003 and controlled most of the market for downloaded PC games by 2011.",
  },
  {
    image: "images/mt.jpeg",
    name: "Marcin Iwiński",
    occu: "CEO of CD Projekt",
    info: "CD Projekt became the first Polish distributor to publish games in Polish boxes and with Polish manuals",
  },
  {
    image: "images/th.jpg",
    name: "Todd Howard",
    occu: "Video game designer, director, producer",
    info: " Howard has been a frequent speaker at industry events and conferences. He spoke to developers at the 2009 D.I.C.E. Summit, sharing his rules of game development. He returned as a keynote speaker at the 2012 D.I.C.E. Summit.",
  },
  {
    image: "images/tp.jpg",
    name: "Trip Hawkins",
    occu: " American entrepreneur and founder of Electronic Arts",
    info: " One of his first big wins was to sign John Madden on as a spokesperson and a consultant to his company's football game which would eventually lead to the popular Madden NFL series of video games.",
  },
  {
    image: "images/SamHouser-President.png",
    name: "Sam Houser",
    occu: "Co-founder & President of Rockstar Games",
    info: "  Houser is the creator of several of the games in the Grand Theft Auto series. On Grand Theft Auto III his responsibilities were, in his words, to be militant on ensuring the game had a look, a sound, a story and a feel that worked.",
  },
];

SPEAKERS_DATA.map(
  (speaker, index) =>
    (featuredList.innerHTML += `<div class="featured-item" id="featured-item-${index}">
          <div class="featured-image">
            <img src="images/checkers.png" alt="checkers" class="checkers" />
            <img src="${speaker.image}" alt="speaker" class="fsp" />
          </div>
          <div class="featured-content">
            <h3 id="featured-title">${speaker.name}</h3>
            <h4 id="featured-subTitle">
              ${speaker.occu}
            </h4>
            <hr id="underline" />
            <p id="featured-text">
              ${speaker.info}
            </p>
          </div>
        </div>
`)
);

const moreBtn = () => {
  const featuredItem = document.querySelectorAll(".featured-item");
  for (let i = items; i < items + 2; i++) {
    if (featuredItem[i]) {
      featuredItem[i].style.display = "flex";
    } else {
      featuredBtn.style.display = "none";
    }
  }
  return (items += 2);
};

moreBtn;
