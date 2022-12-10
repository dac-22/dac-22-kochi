function changeColor(p1color) {
  let h1Ref = document.querySelector("#id1");
  h1Ref.style.color = p1color;
}

function changeFontSize() {
  let h1Ref = document.querySelector("h1");
  h1Ref.style.fontSize = "64px";
}

function reset() {
  let h1Ref = document.querySelector("h1");
  h1Ref.style.color = "inherit";
  h1Ref.style.fontSize = "32px";
}
