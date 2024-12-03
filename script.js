// ----------------Imports--------------------------//

import { generateData, generateHtml } from "./functions.js";

// ----------------Imports--------------------------//

// ----------------Variables--------------------------//

const mercuryEl = document.querySelector(
  ".wrapper__smaller-planet-section__mercury"
);
const venusEl = document.querySelector(
  ".wrapper__smaller-planet-section__venus"
);
const earthEl = document.querySelector(
  ".wrapper__smaller-planet-section__earth"
);
const marsEl = document.querySelector(".wrapper__smaller-planet-section__mars");

const jupiterEl = document.querySelector(
  ".wrapper__smaller-planet-section__jupiter"
);
const saturnEl = document.querySelector(
  ".wrapper__smaller-planet-section__saturn"
);
const uranusEl = document.querySelector(
  ".wrapper__smaller-planet-section__uranus"
);
const neptuneEl = document.querySelector(
  ".wrapper__smaller-planet-section__neptune"
);

const sunEl = document.querySelector(".sun-section");

// ----------------Variables--------------------------//

// ----------------Code--------------------------//

sunEl.addEventListener("click", async () => {
  let updatedData;
  const dataAboutPlanets = await generateData();

  for (let key in dataAboutPlanets) {
    let data = dataAboutPlanets[key];
    updatedData = data[0];
    console.log(updatedData);
  }

  generateHtml(updatedData);
});

mercuryEl.addEventListener("click", async () => {
  let updatedData;
  const dataAboutPlanets = await generateData();

  for (let key in dataAboutPlanets) {
    let data = dataAboutPlanets[key];
    updatedData = data[1];
    console.log(updatedData);
  }

  generateHtml(updatedData);
});
venusEl.addEventListener("click", async () => {
  let updatedData;
  const dataAboutPlanets = await generateData();

  for (let key in dataAboutPlanets) {
    let data = dataAboutPlanets[key];
    updatedData = data[2];
    console.log(updatedData);
  }

  generateHtml(updatedData);
});
earthEl.addEventListener("click", async () => {
  let updatedData;
  const dataAboutPlanets = await generateData();

  for (let key in dataAboutPlanets) {
    let data = dataAboutPlanets[key];
    updatedData = data[3];
    console.log(updatedData);
  }

  generateHtml(updatedData);
});
marsEl.addEventListener("click", async () => {
  let updatedData;
  const dataAboutPlanets = await generateData();

  for (let key in dataAboutPlanets) {
    let data = dataAboutPlanets[key];
    updatedData = data[4];
    console.log(updatedData);
  }

  generateHtml(updatedData);
});
jupiterEl.addEventListener("click", async () => {
  let updatedData;
  const dataAboutPlanets = await generateData();

  for (let key in dataAboutPlanets) {
    let data = dataAboutPlanets[key];
    updatedData = data[5];
    console.log(updatedData);
  }

  generateHtml(updatedData);
});
saturnEl.addEventListener("click", async () => {
  let updatedData;
  const dataAboutPlanets = await generateData();

  for (let key in dataAboutPlanets) {
    let data = dataAboutPlanets[key];
    updatedData = data[6];
    console.log(updatedData);
  }

  generateHtml(updatedData);
});
uranusEl.addEventListener("click", async () => {
  let updatedData;
  const dataAboutPlanets = await generateData();

  for (let key in dataAboutPlanets) {
    let data = dataAboutPlanets[key];
    updatedData = data[7];
    console.log(updatedData);
  }
  generateHtml(updatedData);
});
neptuneEl.addEventListener("click", async () => {
  console.log("clicked neptune");

  let updatedData;
  const dataAboutPlanets = await generateData();

  for (let key in dataAboutPlanets) {
    let data = dataAboutPlanets[key];
    updatedData = data[8];
    console.log(updatedData);
  }

  generateHtml(updatedData);
});

// ----------------Code--------------------------//

// här är alla eventlisteneres i denna huvudmodul och jag valde att
// ha dem här för de representerar skelettet kan man säga
