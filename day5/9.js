function likeme() {
  let spanRef = document.querySelector("span");

  // GET THE VALUE
  let currentValue = spanRef.innerHTML;
  let currentCount = parseInt(currentValue);
  currentCount++;

  // SET THE VALUE :: UPDATE THE VALUE
  spanRef.innerHTML = currentCount;
}
