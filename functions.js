const generateKey = async () => {
  let key;
  try {
    let response = await fetch(
      "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys",
      {
        method: "POST",
      }
    );
    key = await response.json();
  } catch (error) {
    console.log(error);
  }
  return key;
};

export const generateData = async () => {
  let data;
  try {
    let key = await generateKey();
    let resp = await fetch(
      "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies",
      {
        method: "GET",
        headers: { "x-zocom": `${key.key}` },
      }
    );
    data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return data;
};

const bodyEl = document.querySelector(".body-container");
let planetImage;
let closeEl;
let innerCircle;
let outerCircle;

export const generateHtml = (item) => {
  bodyEl.innerHTML = `<section class="planet-html-template">
       <i class="fa fa-times"></i> 
        <section class="planet-img"></section>
        <section class="planet-img-inner-circle"></section>
        <section class="planet-img-outer-circle"></section>
  
        <section class="planet-container">
          <section class="planet-container__name-wrapper">
            <h1 class="planet-container__name-wrapper__name">${item.name.toUpperCase()}</h1>
            <h3 class="planet-container__name-wrapper__latin-name">${item.latinName.toUpperCase()}</h3>
          </section>
          <p class="planet-container__about-text">
        ${item.desc}
          </p>
          <section class="planet-container__data-center">
            <section class="planet-container__data-center__wrapper-left">
              <h4 class="planet-container__data-center__wrapper-left__circuit">
                OMKRETS
              </h4>
              <p
                class="planet-container__data-center__wrapper-left__circuit-data"
              >
                ${item.circumference} km
              </p>
              <h4 class="planet-container__data-center__wrapper-left__max-temp">
                MAX TEMPERATUR
              </h4>
              <p
                class="planet-container__data-center__wrapper-left__max-temp-data"
              >
                ${item.temp.day} C
              </p>
            </section>
            <section class="planet-container__data-center__wrapper-right">
              <h4
                class="planet-container__data-center__wrapper-right__km-from-sun"
              >
                KM FRÅN SOLEN
              </h4>
              <p
                class="planet-container__data-center__wrapper-right__kmr-from-sun-data"
              >
               ${item.distance} km
              </p>
              <h4 class="planet-container__data-center__wrapper-right__min-temp">
                MIN TEMPERATUR
              </h4>
              <p
                class="planet-container__data-center__wrapper-right__min-temp-data"
              >
               ${item.temp.night} C
              </p>
            </section>
          </section>
          <section class="planet-container__data-bottom">
            <h4 class="planet-container__data-bottom__moons">MÅNAR</h4>
            <section class="planet-container__data-bottom__moons-data">${item.moons
              .map((moon) => `<p>${moon}</p>`)
              .join(",")}</section>
          </section>
        </section>
      </section>`;

  closeEl = document.querySelector(".fa-times");
  planetImage = document.querySelector(".planet-img");
  innerCircle = document.querySelector(".planet-img-inner-circle");
  outerCircle = document.querySelector(".planet-img-outer-circle");
  closeEl.addEventListener("click", closeModal);
  changePlanetColor(item.id);
  let planetContainerEl = document.querySelector(".planet-container");
  if (item.id === 2) {
    planetContainerEl.style.width = "70%";
  }
};

const closeModal = () => {
  window.location.reload();
};
const changePlanetColor = (itemId) => {
  if (itemId === 0) {
    planetImage.style.backgroundColor = "rgba(255, 208, 41, 1)";
    innerCircle.style.backgroundColor = "rgba(255, 209, 41, 0.095)";
    outerCircle.style.backgroundColor = "rgba(255, 209, 41, 0.037)";
  } else if (itemId === 1) {
    planetImage.style.backgroundColor = "rgba(136, 136, 136, 1)";
    innerCircle.style.backgroundColor = "rgba(136, 209, 41, 0.095)";
    outerCircle.style.backgroundColor = "rgba(136, 209, 41, 0.037)";
  } else if (itemId === 2) {
    planetImage.style.backgroundColor = "rgba(231, 205, 205, 1)";
    innerCircle.style.backgroundColor = "rgba(231, 209, 41, 0.095)";
    outerCircle.style.backgroundColor = "rgba(231, 209, 41, 0.037)";
  } else if (itemId === 3) {
    planetImage.style.backgroundColor = "rgba(66, 142, 212, 1)";
    innerCircle.style.backgroundColor = "rgba(66, 209, 41, 0.095)";
    outerCircle.style.backgroundColor = "rgba(66, 209, 41, 0.037)";
  } else if (itemId === 4) {
    planetImage.style.backgroundColor = "rgba(239, 95, 95, 1)";
    innerCircle.style.backgroundColor = "rgba(239, 209, 41, 0.095)";
    outerCircle.style.backgroundColor = "rgba(239, 209, 41, 0.037)";
  } else if (itemId === 5) {
    planetImage.style.backgroundColor = "rgba(226, 148, 104, 1)";
    innerCircle.style.backgroundColor = "rgba(226, 209, 41, 0.095)";
    outerCircle.style.backgroundColor = "rgba(226, 209, 41, 0.037)";
  } else if (itemId === 6) {
    planetImage.style.backgroundColor = "rgba(199, 170, 114, 1)";
    innerCircle.style.backgroundColor = "rgba(199, 209, 41, 0.095)";
    outerCircle.style.backgroundColor = "rgba(199, 209, 41, 0.037)";
  } else if (itemId === 7) {
    planetImage.style.backgroundColor = "rgba(201, 212, 241, 1)";
    innerCircle.style.backgroundColor = "rgba(201, 209, 41, 0.095)";
    outerCircle.style.backgroundColor = "rgba(201, 209, 41, 0.037)";
  } else {
    planetImage.style.backgroundColor = "rgba(122, 145, 167, 1)";
    innerCircle.style.backgroundColor = "rgba(122, 209, 41, 0.095)";
    outerCircle.style.backgroundColor = "rgba(122, 209, 41, 0.037)";
  }
};

// här är alla funktioner som jobbar ihop så att eventlisteners på
// scripts.js ska fungera som det ska
// även variabler som hör till funktionerna
