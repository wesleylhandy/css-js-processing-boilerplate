"use strict";

/**
 * Function to scroll to a particular point on the DOM or within a overflow:scroll box
 * @param {Number} top - pageYoffset of form
 * @param {HTMLElement} [parent=window] - defaults to window, but can receive any DOM element that is a parent of the scollpoint
 * @param {HTMLElement} [el=null] - not necessary if scrolling on window, but if scrolling within a container it must be provided
 */
function scrollToPoint() {
  var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  var el = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (parent !== window && !el) {
    return;
  }

  var parentHeight = parent === window ? document.documentElement.scrollHeight : parent.scrollHeight;
  var visibleHeight = parent === window ? window.innerHeight : parent.clientHeight;
  var initialPoint;

  if (parent === window) {
    initialPoint = parent.scrollY ? parent.scrollY : parent.pageYOffset;
  } else {
    initialPoint = el.offsetTop;
  }

  var scrollDown = top >= initialPoint;

  if (scrollDown) {
    top = top > parentHeight - visibleHeight ? parentHeight - visibleHeight : top;
  } else {
    top = parentHeight <= visibleHeight ? 0 : top;
  }

  window.requestAnimationFrame(uiScroll);

  function uiScroll(timestamp) {
    var scroll;

    if (parent === window) {
      scroll = parent.scrollY ? parent.scrollY : parent.pageYOffset;
    } else {
      scroll = parent.scrollTop;
    }

    var speed = Math.ceil(Math.sqrt(Math.abs(top - scroll))) + 2;

    if (scrollDown) {
      if (scroll + speed > top) {
        window.cancelAnimationFrame(timestamp);
        return;
      }

      scroll = scroll + speed >= top ? top : scroll + speed;
    } else {
      if (scroll - speed < top) {
        window.cancelAnimationFrame(timestamp);
        return;
      }

      scroll = scroll - speed <= top ? top : scroll - speed;
    }

    parent.scroll(0, scroll);
    window.requestAnimationFrame(uiScroll);
  }
}
/**
 *
 * @param {HTMLElement} el - DOM Element
 * @param {HTMLElement} parent - DOM element - defaults to window
 * @returns {Number} - integer representing offsetTop of the element relative to the viewport
 */


function offsetTop(el) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

  if (parent !== window && !el) {
    return;
  } else if (parent === window) {
    var rect = el.getBoundingClientRect(),
        scrollTop = parent.scrollY ? parent.scrollY : parent.pageYOffset;
    return rect.top + scrollTop;
  } else {
    return el.offsetTop;
  }
}