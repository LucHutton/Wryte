function loadPrevious(){
  if (localStorage.getItem("section-contents") == ""){
    document.getElementsByTagName('section')["0"].innerText = "Write whatever...";
  } else{
  document.getElementsByTagName('section')["0"].innerText = localStorage.getItem("section-contents");
}
}

setInterval(function() {
  var words = document.getElementsByTagName('section')["0"].innerText;
  let wordsArray = words.split(" ");
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
