let messageList = [];

// THIS IS LIKER UR CONSTRUCTOR
window.addEventListener("load", () => {
  // READ THE MESSAGES :: FROM LOCAL STORAGE
  let strList = localStorage.getItem("messageList");
  messageList = JSON.parse(strList) || [];

  let divRef = document.querySelector("#parent");
  for (let item of messageList) {
    let previousMessage = `<div
                            style="
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                            "
                            >
                            <h1>${item}</h1>
                            <input type="button" value="DEL" onclick="deleteMessage(this)" />
                            </div>`;

    divRef.innerHTML = previousMessage + divRef.innerHTML;
  }
});

function addMessage(p1) {
  let divRef = document.querySelector("#parent");
  let textRef = p1.previousElementSibling;

  // if the input field is invalid; returns from here.
  if (!textRef.checkValidity()) {
    // alert("Empty Messages are not allowed");
    textRef.style.border = "1px solid red";
    return;
  } else {
    textRef.style.border = "1px solid black";
  }

  let newMessage = `<div
                    style="
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    "
                    >
                    <h1>${textRef.value}</h1>
                    <input type="button" value="DEL" onclick="deleteMessage(this)" />
                    </div>`;

  divRef.innerHTML = newMessage + divRef.innerHTML;

  // ADD THE MESSAGE INTO THE ARRAY; :: TO SAVE INTO LOCALSTORAGE
  messageList.push(textRef.value);
  localStorage.setItem("messageList", JSON.stringify(messageList));

  // clear
  textRef.value = "";
}

function checkEnterCode(event) {
  if (event.keyCode == 13) {
    let btn1Ref = document.querySelector("#btn1");
    addMessage(btn1Ref);
  }
}

function deleteMessage(p1) {
  p1.parentElement.remove();
}

function searchMessages() {
  let strList = localStorage.getItem("messageList");
  let inputList = JSON.parse(strList);

  let searchRef = document.querySelector("#sid");
  // let outputList = inputList.filter((item) => item.startsWith("c"));
  let outputList = inputList.filter((item) => item.startsWith(searchRef.value));

  // Search Result Rendering.
  let divRef = document.querySelector("#parent");
  divRef.innerHTML = "";
  for (let item of outputList) {
    let searchMessage = `<div
          style="
              display: flex;
              justify-content: space-between;
              align-items: center;
          "
          >
          <h1>${item}</h1>
          <input type="button" value="DEL" onclick="deleteMessage(this)" />
          </div>`;

    divRef.innerHTML = searchMessage + divRef.innerHTML;
  }
}
