if (!window.scrollTo) {
  window.scrollTo = function (option) {
    window.scrollLeft = option.left
    window.scrollTop = option.top
  }
}

if (!document.body.scrollTo) {
  Element.prototype.scrollTo = function (option) {
    this.scrollLeft = option.left
    this.scrollTop = option.top
  }
}
