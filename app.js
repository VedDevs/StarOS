// =====================
// DRAGGABLE WINDOWS
// =====================

dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("Me"));
dragElement(document.getElementById("wikipedia"));

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
// =====================

function closeWindow(element) {
  element.style.display = "none";
}

function openWindow(element) {
  element.style.display = "flex";
}

// =====================
// WELCOME WINDOW
// =====================

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
          <span contenteditable="true">Welcome to <strong>Hacker Notes</strong>
            </br>
            </br>
            <img src=""
              style="width: 96px; border-radius: 16px" />
            </br>
            </br>

            This is a place where I store my thoughts as they come to mind. What exactly will you find when browsing
            through
            these notes? As I <del>once said</del> <ins>always say</ins>
          </span>
        <blockquote
          style="background-color: #F9F9F9; margin-top: 16x; margin-bottom: 16px; margin-left: 0px; margin-right: 0px; padding: 16px; border-radius: 16px;"
          contenteditable="true">
          <i>Time Will Tell
            </br>
            ~ Thomas
          </i>
        </blockquote>
        <span contenteditable="true">
          I suppose you may see a bit of content about technology. Perhaps some insights regarding recent projects.
          Maybe
          even some thoughts regarding nature & tea? Go and find out!
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
  });
  setNotesContent(0)
}

function setNotesContent(index) {
  var notescontent = document.querySelector("#notesContent");

  notescontent.innerHTML = content[index].content;
}

// =====================
// Wikipedia WINDOW


