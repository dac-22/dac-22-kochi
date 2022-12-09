function changeFontSize(p1) {
  let pref = document.querySelector("p");

  if (p1 == "s") {
    pref.style.fontSize = "small";
  } else if (p1 == "m") {
    pref.style.fontSize = "medium";
  } else if (p1 == "l") {
    pref.style.fontSize = "large";
  }
}

function reset() {
  let pref = document.querySelector("p");
  pref.style.fontSize = "medium";
}
