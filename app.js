// =====================
// DRAGGABLE WINDOWS

dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("Me"));
dragElement(document.getElementById("wikipedia"));
dragElement(document.getElementById("Contacts"));
dragElement(document.getElementById("Weather"));

function dragElement(element) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = dragMouseDown;
  } else {
    element.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;

    pos3 = e.clientX;
    pos4 = e.clientY;

    element.style.top = element.offsetTop - pos2 + "px";
    element.style.left = element.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// =====================
// WINDOW MANAGEMENT

function closeWindow(element) {
  element.style.display = "none";
}

function openWindow(element) {
  element.style.display = "flex";
}

// =====================
// Topbar
function updateTime() {
  document.getElementById("timeElement").innerHTML =
  new Date().toLocaleString();
}

updateTime();
setInterval(updateTime, 1000);

// =====================
// WELCOME WINDOW

const welcomeScreen = document.getElementById("welcome");

const welcomeScreenClose = document.getElementById("welcomeclose");

const welcomeScreenOpen = document.getElementById("welcomeopen");

if (welcomeScreenClose) {
  welcomeScreenClose.addEventListener("click", () => {
    closeWindow(welcomeScreen);
  });
}

if (welcomeScreenOpen) {
  welcomeScreenOpen.addEventListener("click", () => {
    openWindow(welcomeScreen);
  });
}

// =====================
// ME WINDOW

var content = [
  {
    title: "Welcome",
    date: "06/28/2023",
    content: `
              <p contenteditable="True">
          <span contenteditable="true">Welcome to <strong>Star Notes</strong>
            </br>
            </br>
            <img src=""
              style="width: 96px; border-radius: 16px" />
            </br>
            </br>

            Hi, I'm Ved.

            I'm a student who enjoys building stuff and getting things done. Most of my projects start with, "Could I make ths myself?"
            


          </span>
          </br>
        <span style="margin-top:16px;"contenteditable="true">
         On this Note, I would like to say
          <blockquote
          style="background-color: #F9F9F9; margin-top: 16x; margin-bottom: 16px; margin-left: 0px; margin-right: 0px; padding: 16px; border-radius: 16px;"
          contenteditable="true">
          <i>Every Expert was once a beginner
            </br>
            ~ Helen Hayes
          </i>
        </blockquote>
        </span>
        </p>
      `,
  },
];

const meWindow = document.getElementById("Me");

const meClose = document.getElementById("meclose");

const meOpen = document.getElementById("meopen");

if (meClose) {
  meClose.addEventListener("click", () => {
    closeWindow(meWindow);
  });
}

if (meOpen) {
  meOpen.addEventListener("click", () => {
    openWindow(meWindow);
    setNotesContent(0);
  });
}

function setNotesContent(index) {
  var notescontent = document.querySelector("#notesContent");

  notescontent.innerHTML = content[index].content;
}

// =====================
// Wikipedia WINDOW

const wikipediaWindow = document.getElementById("wikipedia");

const wikiClose = document.getElementById("wikiclose");

const wikiOpen = document.getElementById("wikiopen");

if (wikiClose) {
  wikiClose.addEventListener("click", () => {
    closeWindow(wikipediaWindow);
  });
}
if (wikiOpen) {
  wikiOpen.addEventListener("click", () => {
    openWindow(wikipediaWindow);
  });
}

// =====================
// CONTACTS

const contactWindow = document.getElementById("Contacts");

const contactClose = document.getElementById("contactsClose");

const contactOpen = document.getElementById("contactsopen");

if (contactClose) {
  contactClose.addEventListener("click", () => {
    closeWindow(contactWindow);
  });
}
if (contactOpen) {
  contactOpen.addEventListener("click", () => {
    openWindow(contactWindow);
  });
}

// =====================
// Weather

const weatherWindow = document.getElementById("Weather");

const weatherClose = document.getElementById("WeatherClose");

const weatherOpen = document.getElementById("WeatherOpen");

if (weatherClose) {
  weatherClose.addEventListener("click", () => {
    closeWindow(weatherWindow);
  });
}

if (weatherOpen) {
  weatherOpen.addEventListener("click", () => {
    openWindow(weatherWindow);
  });
}

// weather search
const cityInput = document.getElementById("CityEntry");

cityInput.onmousedown = function (e) {
  e.stopPropagation();
};

document.getElementById("SearchWeather").onmousedown = function (e) {
  e.stopPropagation();
};

document.getElementById("SearchWeather").addEventListener("click", async () => {
  const city = cityInput.value;

  // alert(city);
  try {
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`,
    );

    const geoData = await geoResponse.json();

    const longitude = geoData.results[0].longitude;
    const latitude = geoData.results[0].latitude;
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`,
    );
    const weatherData = await weatherResponse.json();

    document.getElementById("weatherCity").textContent = city;
    document.getElementById("tempCity").textContent =
      weatherData.current.temperature_2m + "°C";

    document.getElementById("conditionCity").textContent =
      "Weather Data Loaded Successfully";
  } 
  catch (error) {
    document.getElementById("conditionCity").textContent = "City not found";
  }
});
