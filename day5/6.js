function changeColor(p1, p2) {
  let h1ref = document.querySelector("h1");
  h1ref.style.color = p2;
  h1ref.style.background = p1;
}

function red() {
  let h1ref = document.querySelector("h1");
  h1ref.style.color = "red";
}

function green() {
  let h1ref = document.querySelector("h1");
  h1ref.style.color = "green";
}

function blue() {
  let h1ref = document.querySelector("h1");
  h1ref.style.color = "blue";
}

function resetColor() {
  let h1ref = document.querySelector("h1");
  h1ref.style.color = "black";
  h1ref.style.background = "white";
}
