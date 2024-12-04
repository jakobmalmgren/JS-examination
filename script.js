// ----------------Imports--------------------------//

import { generateHtml } from "./changingEl.js";
import { generateData } from "./api.js";

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
  try {
    let updatedData;
    const dataAboutPlanets = await generateData();

    for (let key in dataAboutPlanets) {
      let data = dataAboutPlanets[key];
      updatedData = data[0];
      console.log(updatedData);
    }
    generateHtml(updatedData);
  } catch (error) {
    console.log(error);
  }
});

mercuryEl.addEventListener("click", async () => {
  try {
    let updatedData;
    const dataAboutPlanets = await generateData();

    for (let key in dataAboutPlanets) {
      let data = dataAboutPlanets[key];
      updatedData = data[1];
      console.log(updatedData);
    }

    generateHtml(updatedData);
  } catch (error) {
    console.log(error);
  }
});
venusEl.addEventListener("click", async () => {
  try {
    let updatedData;
    const dataAboutPlanets = await generateData();

    for (let key in dataAboutPlanets) {
      let data = dataAboutPlanets[key];
      updatedData = data[2];
      console.log(updatedData);
    }

    generateHtml(updatedData);
  } catch (error) {
    console.log(error);
  }
});

earthEl.addEventListener("click", async () => {
  try {
    let updatedData;
    const dataAboutPlanets = await generateData();

    for (let key in dataAboutPlanets) {
      let data = dataAboutPlanets[key];
      updatedData = data[3];
      console.log(updatedData);
    }

    generateHtml(updatedData);
  } catch (error) {
    console.log(error);
  }
});
marsEl.addEventListener("click", async () => {
  try {
    let updatedData;
    const dataAboutPlanets = await generateData();

    for (let key in dataAboutPlanets) {
      let data = dataAboutPlanets[key];
      updatedData = data[4];
      console.log(updatedData);
    }

    generateHtml(updatedData);
  } catch (error) {
    console.log(error);
  }
});
jupiterEl.addEventListener("click", async () => {
  try {
    let updatedData;
    const dataAboutPlanets = await generateData();

    for (let key in dataAboutPlanets) {
      let data = dataAboutPlanets[key];
      updatedData = data[5];
      console.log(updatedData);
    }

    generateHtml(updatedData);
  } catch (error) {
    console.log(error);
  }
});
saturnEl.addEventListener("click", async () => {
  try {
    let updatedData;
    const dataAboutPlanets = await generateData();

    for (let key in dataAboutPlanets) {
      let data = dataAboutPlanets[key];
      updatedData = data[6];
      console.log(updatedData);
    }

    generateHtml(updatedData);
  } catch (error) {
    console.log(error);
  }
});
uranusEl.addEventListener("click", async () => {
  try {
    let updatedData;
    const dataAboutPlanets = await generateData();

    for (let key in dataAboutPlanets) {
      let data = dataAboutPlanets[key];
      updatedData = data[7];
      console.log(updatedData);
    }
    generateHtml(updatedData);
  } catch (error) {
    console.log(error);
  }
});
neptuneEl.addEventListener("click", async () => {
  try {
    let updatedData;
    const dataAboutPlanets = await generateData();

    for (let key in dataAboutPlanets) {
      let data = dataAboutPlanets[key];
      updatedData = data[8];
      console.log(updatedData);
    }

    generateHtml(updatedData);
  } catch (error) {
    console.log(error);
  }
});

// ----------------Code--------------------------//

// här är "main-JS-filen" så jag valde att
// ha dem här för de representerar skelettet kan man säga.
