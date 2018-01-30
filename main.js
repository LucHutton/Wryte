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
  let p0 = document.getElementsByTagName('p')[0];
  let p1 = document.getElementsByTagName('p')[1];
  let p2 = document.getElementsByTagName('p')[2];
  let p3 = document.getElementsByTagName('p')[3];
  let p4 = document.getElementsByTagName('p')[4];
  let p5 = document.getElementsByTagName('p')[5];
  let p6 = document.getElementsByTagName('p')[6];
  let p7 = document.getElementsByTagName('p')[7];
  let p8 = document.getElementsByTagName('p')[8];
  let p9 = document.getElementsByTagName('p')[9];

  p1.setAttribute("style","display:" + "none");
  p2.setAttribute("style","display:" + "none");
  p3.setAttribute("style","display:" + "none");
  p4.setAttribute("style","display:" + "none");
  p5.setAttribute("style","display:" + "none");
  p6.setAttribute("style","display:" + "none");

  if (theme === "light"){
    p0.setAttribute("style","color:" + "#dddddd");
    p7.setAttribute("style","color:" + "#dddddd");
    p8.setAttribute("style","color:" + "#dddddd");
    p9.setAttribute("style","color:" + "#dddddd");
  } else if (theme === "dark") {
    p0.setAttribute("style","color:" + "#5b6772");
    p7.setAttribute("style","color:" + "#5b6772");
    p8.setAttribute("style","color:" + "#5b6772");
    p9.setAttribute("style","color:" + "#5b6772");
  }
}

function zenOff(){
  let p0 = document.getElementsByTagName('p')[0];
  let p1 = document.getElementsByTagName('p')[1];
  let p2 = document.getElementsByTagName('p')[2];
  let p3 = document.getElementsByTagName('p')[3];
  let p4 = document.getElementsByTagName('p')[4];
  let p5 = document.getElementsByTagName('p')[5];
  let p6 = document.getElementsByTagName('p')[6];
  let p7 = document.getElementsByTagName('p')[7];
  let p8 = document.getElementsByTagName('p')[8];
  let  p9 = document.getElementsByTagName('p')[9];

  p0.removeAttribute("style");
  p1.removeAttribute("style");
  p2.removeAttribute("style");
  p3.removeAttribute("style");
  p4.removeAttribute("style");
  p5.removeAttribute("style");
  p6.removeAttribute("style");
  p7.removeAttribute("style");
  p8.removeAttribute("style");
  p9.removeAttribute("style");
}
