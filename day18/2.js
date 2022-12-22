function makeAjaxCall() {
  var xhr = new XMLHttpRequest();

  xhr.onload = function () {
    document.getElementById("container").innerHTML =
      xhr.getAllResponseHeaders();
  };

  xhr.open("GET", "http://localhost:3001/messages", true);
  xhr.send();
}

function makeAjaxCallUsingJQuery() {
  let url = "http://localhost:3001/messages";
  $.get(url);
}

async function makeAjaxCallV1() {
  let result = await axios.get("http://localhost:3001/messages");
}

function changeColor(color) {
  $("#id1").css("color", color);
}
