let messageList = [];

window.addEventListener("load", () => {
  let strList = localStorage.getItem("messageList");
  if (strList != null) {
    messageList = JSON.parse(strList);
  }

  let parentRef = document.querySelector("#container");
  for (let item of messageList) {
    let message = item.message;

    let messageTime = new Date(item.messageTime);
    let hour = messageTime.getHours();
    let minutes = messageTime.getMinutes();

    let dclass = "justify-content-start";
    if (item.reply) {
      dclass = "justify-content-end";
    }

    let newMessage = `<div class="row mb-1 ${dclass}">
            <div class="col-6">
                <div
                class="d-flex badge text-bg-danger opacity-75 justify-content-between align-items-center"
                >
                <div>${message}</div>
                <div style="font-size: 10px">${hour}:${minutes}</div>
                </div>
            </div>
        </div>`;

    parentRef.innerHTML = newMessage + parentRef.innerHTML;
  }
});

function addMessage(reply) {
  let parentRef = document.querySelector("#container");

  let textRef = document.querySelector("#textId1");
  // validation
  if (!textRef.checkValidity()) {
    // alert("Valdiation error");
    textRef.classList.add("border-danger");
    return;
  } else {
    textRef.classList.remove("border-danger");
  }

  let message = textRef.value;
  let messageTime = new Date();
  let hour = messageTime.getHours();
  let minutes = messageTime.getMinutes();

  let dclass = "justify-content-start";
  if (reply) {
    dclass = "justify-content-end";
  }

  let newMessage = `<div class="row mb-1 ${dclass}">
                        <div class="col-6">
                            <div
                            class="d-flex badge text-bg-danger opacity-75 justify-content-between align-items-center"
                            >
                            <div>${textRef.value}</div>
                            <div style="font-size: 10px">${hour}:${minutes}</div>
                            </div>
                        </div>
                    </div>`;

  parentRef.innerHTML = newMessage + parentRef.innerHTML;
  textRef.value = "";

  // Storing in Localstorage
  let messageRef = { message: message, messageTime: messageTime, reply: reply };
  messageList.push(messageRef);
  localStorage.setItem("messageList", JSON.stringify(messageList));
}

function checkEnterEvent(event) {
  if (event.keyCode == "13") {
    addMessage(false);
  }
}
