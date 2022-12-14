function addMessage(reply) {
  let parentRef = document.querySelector("#container");

  let textRef = document.querySelector("#textId1");
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
                            class="d-flex badge text-bg-secondary justify-content-between align-items-center"
                            >
                            <div>${textRef.value}</div>
                            <div style="font-size: 10px">${hour}:${minutes}</div>
                            </div>
                        </div>
                    </div>`;

  parentRef.innerHTML = newMessage + parentRef.innerHTML;

  textRef.value = "";
}
