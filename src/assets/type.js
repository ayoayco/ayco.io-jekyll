// DISCLAIMER: This function does require jQuery. I've used it here because the project I'm building this for already uses jQuery, so I thought why not. It can be modified quite simply to be done in raw JavaScript.  Just thought I'd let you know.

// This is the funtion you need to copy
function autoType(elementClass, typingSpeed) {
  var _this = $(elementClass);
  _this.css({
    position: "relative",
    display: "inline-block",
  });
  _this.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  _this = _this.find(".text-js");
  var text = _this.text().trim().split("");
  var amntOfChars = text.length;
  var newString = "";
  _this.text("|");
  setTimeout(function () {
    _this.css("opacity", 1);
    _this.prev().removeAttr("style");
    _this.text("");
    for (var i = 0; i < amntOfChars; i++) {
      (function (i, char) {
        setTimeout(function () {
          newString += char;
          _this.text(newString);
        }, i * typingSpeed);
      })(i + 1, text[i]);
    }
  }, 1500);
}

$(document).ready(function () {
  // Now to start autoTyping just call the autoType function with the
  // class of outer div
  // The second paramter is the speed between each letter is typed.
  autoType(".type-js", 200);
});
