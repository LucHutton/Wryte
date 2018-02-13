var theme = "light";

function loadPrevious(){
  if (localStorage.getItem("section-contents") == ""){
    document.getElementsByTagName('section')["0"].innerText = "Write whatever...";
  } else{
  document.getElementsByTagName('section')["0"].innerText = localStorage.getItem("section-contents");
}
}

setInterval(function() {
  var words = document.getElementsByTagName('section')["0"].innerText;
  wordsFlat = words.replace(/\s+/g," ").trim();
  let wordsArray = wordsFlat.split(" ");
  let wordAmount = wordsArray.length;
  let wordCounter = document.getElementById('wordCount');
  let count = document.createTextNode(`words: ${wordAmount}`);
  wordCounter.replaceChild(count, wordCounter.childNodes[0]);

  localStorage.setItem("section-contents",words);
}, 3000);

function clearText(){
  let section = document.getElementsByTagName('section')["0"];
  section.innerText = "";
}

function toWhite(){
  theme = "light";
  let root = document.getElementsByTagName('html')[0];
  root.style.setProperty("background-color", "white");
  root.style.setProperty("color", "#343a40");
}

function toBlack(){
  theme = "dark";
  let root = document.getElementsByTagName('html')[0];
  root.style.setProperty("background-color", "#343a40");
  root.style.setProperty("color", "white");
}

function zenOn() {
  let ps = document.getElementsByTagName('p');
  for(let i = 1; i < ps.length; i++){
    if (i === 3){
      continue;
    } else{
    let psi = ps[i];
    psi.setAttribute("style", "display:" + "none")
    }
  }
  
  let toggle = document.getElementById("zen-toggle");
  toggle.setAttribute("onclick", "zenOff()");
}

function zenOff(){
  let ps = document.getElementsByTagName('p');
  for (let i = 0; i < ps.length; i++) {
    let psi = ps[i];
    psi.removeAttribute("style");
  }

  let toggle = document.getElementById("zen-toggle");
  toggle.setAttribute("onclick", "zenOn()");
}
