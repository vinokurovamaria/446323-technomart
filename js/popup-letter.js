'use strict';
(function () {

  var openLetter = document.querySelector(".contacts-button-map");
  var letter = document.querySelector(".modal-letter");
  var closeLetter = letter.querySelector(".letter-close");
  var userName = letter.querySelector("[name=name]");

  var map = document.querySelector(".modal-map");
  var openMap = document.querySelector (".map-img");
  var closeMap = map.querySelector(".map-close")

  openLetter.addEventListener("click", function(event) {
    event.preventDefault();
    letter.classList.add("modal-letter-show");
    userName.focus();
  })

  closeLetter.addEventListener("click", function(event) {
    event.preventDefault();
    if (letter.classList.contains("modal-letter-show")) {
      letter.classList.remove("modal-letter-show");
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
      if (letter.classList.contains("modal-letter-show")) {
        letter.classList.remove("modal-letter-show");
      }
    }
  })

  openMap.addEventListener("click", function(event) {
    event.preventDefault();
    map.classList.add("modal-map-show");
  })

  closeMap.addEventListener("click", function(event) {
    event.preventDefault();
    if (map.classList.contains("modal-map-show")) {
      map.classList.remove("modal-map-show");
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
      if (map.classList.contains("modal-map-show")) {
        map.classList.remove("modal-map-show");
      }
    }
  });
})();
