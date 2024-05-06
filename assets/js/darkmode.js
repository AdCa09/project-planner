let darkmode = document.getElementsByClassName("darkmode");
let button = document.getElementById("darkmodeBtn");
button.textContent = "DarkMode";
let header = document.querySelector("header");
header.appendChild(button);
let toDo = document.getElementById("toDo");
let doing = document.getElementById("doing");
let done = document.getElementById("done");
let isDarkMode = false;
let main = document.querySelector("main");

button.addEventListener("click", function () {
  if (isDarkMode) {
    for (let i = 0; i < darkmode.length; i++) {
      darkmode[i].style.color = "";
      main.style.backgroundColor = "";
      toDo.style.backgroundColor = "";
      doing.style.backgroundColor = "";
      done.style.backgroundColor = "";
      header.style.backgroundColor = "";
    }
    isDarkMode = false;
  } else {
    for (let i = 0; i < darkmode.length; i++) {
      darkmode[i].style.color = "white";
      main.style.backgroundColor = "black";
      toDo.style.backgroundColor = "black";
      doing.style.backgroundColor = "black";
      done.style.backgroundColor = "black";
      header.style.backgroundColor = "black";
    }
    isDarkMode = true;
  }
});
