'use strict';
(function () {
  var openMessage = document.querySelector(".catalog-items");
  var message = document.querySelector(".modal-message");
  var closeMessage = message.querySelector(".meaasge-close");

  openMessage.addEventListener("click", function(event) {
    event.preventDefault();
    var target = event.target;
      if (target.className.toLowerCase() !== 'buy') {
        return;
      }
    message.classList.add("modal-message-show");
  })

  closeMessage.addEventListener("click", function(event) {
    event.preventDefault();
    if (message.classList.contains("modal-message-show")) {
      message.classList.remove("modal-message-show");
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
      if (message.classList.contains("modal-message-show")) {
        message.classList.remove("modal-message-show");;
      }
    }
  });
})();
