let messageList = [];

// THIS IS LIKER UR CONSTRUCTOR
window.addEventListener("load", () => {
  // READ THE MESSAGES :: FROM LOCAL STORAGE
  let strList = localStorage.getItem("messageList");
  // messageList = JSON.parse(strList) || [];
  if (strList == null) {
    messageList = [];
  }

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
