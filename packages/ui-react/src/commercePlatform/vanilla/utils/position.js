export default class Position {
  // we want to be able to get position relative to:
  // - document
  // - body

  _getParentOffsetEl(element) {
    const docDom = document;
    let offsetParent = element.offsetParent || docDom;
    while (
      offsetParent &&
      offsetParent !== docDom &&
      this._isStaticPositioned(offsetParent)
    ) {
      offsetParent = offsetParent.offsetParent;
    }
    return offsetParent;
  }
  /**
   * Check to see if a DOM element is statically positioned
   * @param {DOM element} element
   */
  _isStaticPositioned(element) {
    return (
      (window.getComputedStyle(element, "position") || "static") === "static"
    );
  }

  offset(element) {
    const rect = element.getBoundingClientRect();
    return {
      // top: rect.top + window.pageYOffset,
      // left: rect.left + window.pageXOffset
      width: rect.width || element.offsetWidth,
      height: rect.height || element.offsetHeight,
      top:
        rect.top +
        (window.pageYOffset ||
          document.body.scrollTop ||
          document.documentElement.scrollTop),
      left:
        rect.left +
        (window.pageXOffset ||
          document.body.scrollLeft ||
          document.documentElement.scrollLeft)
    };
  }

  position(element) {
    const elBCR = this.offset(element);
    let offsetParentBCR = { top: 0, left: 0 };
    const offsetParentEl = this._getParentOffsetEl(element);
    if (offsetParentEl !== document.body) {
      offsetParentBCR = this.offset(offsetParentEl);
      offsetParentBCR.top +=
        offsetParentEl.clientTop - offsetParentEl.scrollTop;
      offsetParentBCR.left +=
        offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
    }

    var boundingClientRect = element.getBoundingClientRect();
    return {
      width: boundingClientRect.width || element.offsetWidth,
      height: boundingClientRect.height || element.offsetHeight,
      top: elBCR.top - offsetParentBCR.top,
      left: elBCR.left - offsetParentBCR.left
    };
  }
}
