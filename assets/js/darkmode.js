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
let footer = document.querySelector("footer");
button.addEventListener("click", function () {
  if (isDarkMode) {
    for (let i = 0; i < darkmode.length; i++) {
      darkmode[i].style.color = "";
      darkmode[i].style.backgroundColor = "";
      main.style.backgroundColor = "";
      toDo.style.backgroundColor = "";
      doing.style.backgroundColor = "";
      done.style.backgroundColor = "";
      header.style.backgroundColor = "";
      footer.style.backgroundColor = "";
    }
    isDarkMode = false;
  } else {
    for (let i = 0; i < darkmode.length; i++) {
      darkmode[i].style.color = "white";
      darkmode[i].style.backgroundColor = "#676767";
      main.style.backgroundColor = "#676767";
      toDo.style.backgroundColor = "#676767";
      doing.style.backgroundColor = "#676767";
      done.style.backgroundColor = "#676767";
      header.style.backgroundColor = "#676767";
      footer.style.backgroundColor = "#676767";
    }
    isDarkMode = true;
  }
});
