function addNewMessage() {
  let divRef = document.querySelector("#container");

  let input1Ref = document.querySelector("#input1");
  // GE THE VALUE
  let userinput = input1Ref.value;

  let newElement = `<h1>${userinput}</h1>`;

  // GET THE INNERHTML
  let currentInnerHtml = divRef.innerHTML;

  let newInnerHtml = newElement + currentInnerHtml;

  // SET THE INNERHTML
  divRef.innerHTML = newInnerHtml;

  // SET THE VLAUE
  input1Ref.value = "";
}
