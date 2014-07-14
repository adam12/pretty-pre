/**
 * Strip the text inside the elements returned via the given selector
 *
 * @param {String} selector
 */

exports.strip = function(selector) {
  var elementList = document.querySelectorAll(selector);

  for (var i = 0; i<= elementList.length; i++) {
    var element = elementList[i];

    if (typeof element === "undefined") continue;

    var stripped = element.textContent
                    .replace(/^\s+\|/mg, '')
                    .replace(/^\s+|\s+$/g, '');

    element.textContent = stripped;
  }
};
