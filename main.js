var themeType = "light";

function loadPrevious() {
  if (localStorage.getItem("section-contents") == "") {
    document.getElementsByTagName('section')["0"].innerText = "Write whatever...";
  } else {
    document.getElementsByTagName('section')["0"].innerText = localStorage.getItem("section-contents");
  }
}

setInterval(function () {
  var contenteditableContent = document.getElementsByTagName('section')["0"].innerText;
  contenteditableContentFlat = contenteditableContent.replace(/\s+/g, " ").trim();
  let contenteditableContentArray = contenteditableContentFlat.split(" ");
  let wordAmount = contenteditableContentArray.length;
  let wordCounter = document.getElementById('wordCount');
  let count = document.createTextNode(`words: ${wordAmount}`);
  wordCounter.replaceChild(count, wordCounter.childNodes[0]);

  localStorage.setItem("section-contents", contenteditableContent);
}, 3000);

function clearText() {
  let section = document.getElementsByTagName('section')["0"];
  section.innerText = "";
}

function toWhite() {
  themeType = "light";
  let root = document.getElementsByTagName('html')[0];
  root.style.setProperty("background-color", "white");
  root.style.setProperty("color", "#343a40");
}

function toBlack() {
  themeType = "dark";
  let root = document.getElementsByTagName('html')[0];
  root.style.setProperty("background-color", "#343a40");
  root.style.setProperty("color", "white");
}

function zenOn() {
  let ps = document.getElementsByTagName('p');
  let i = ps.length - 1;
  for (i; i > 0; i--) {
    if (i !== 3) {
      let psi = ps[i];
      psi.setAttribute("style", "display:" + "none");
  }
}

  let toggle = document.getElementById("zen-toggle");
  toggle.setAttribute("onclick", "zenOff()");
}

function zenOff() {
  let ps = document.getElementsByTagName('p');
  let i = ps.length - 1;
  for (i; i > 0; i--) {
    ps[i].removeAttribute("style");
  }

  let toggle = document.getElementById("zen-toggle");
  toggle.setAttribute("onclick", "zenOn()");
}
