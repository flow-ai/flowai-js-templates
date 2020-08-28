"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Message that renders in a bubble either shown as the received message that allows a customer to open a List or time picker. Or as a reply message that is shown after a customer makes a selection,
 * 
 * @memberof Apple
 * @category Components
 * 
 * @property {string} title - The main title shown in the header of the message bubble
 * @property {string} subtitle - The subtitle that appears under the main title in the received message bubble
 * @property {string} secondarySubtitle - A right-aligned title. Limited to 512 characters. Only custom interactive messages support this.
 * @property {string} tertiarySubtitle - A right-aligned subtitle. Limited to 512 characters. Only custom interactive messages support this.
 * @property {string} image - Optional URL to a 30x30 image
 * @property {string} imageTitle - The attached image's title. Limited to 512 characters. Only custom interactive messages support this.
 * @property {string} imageSubtitle - The attached image's subtitle. Limited to 512 characters. Only custom interactive messages support this.
 * @property {string} style - A style that controls the size of the view rendered by Live Layout can be icon, small, large. The default is icon. 
 **/
var InteractiveMessage = /*#__PURE__*/function () {
  /**
   * @param {object} opts - Collection of options
   * @param {string} opts.title - Required title
   * @param {string} opts.subtitle - Optional subtitle
   * @param {string} opts.secondarySubtitle - A right-aligned title
   * @param {string} opts.tertiarySubtitle - A right-aligned subtitle
   * @param {string} opts.image - Optional URL to a 30x30 image
   * @param {string} opts.imageTitle - The image's title
   * @param {string} opts.imageSubtitle - The image's subtitle
   * @param {string} opts.style - A style that controls the size of the view
   **/
  function InteractiveMessage(opts) {
    _classCallCheck(this, InteractiveMessage);

    if (_typeof(opts) !== "object") {
      throw new Error("To create a InteractiveMessage you at least need a title");
    }

    var title = opts.title,
        subtitle = opts.subtitle,
        secondarySubtitle = opts.secondarySubtitle,
        tertiarySubtitle = opts.tertiarySubtitle,
        image = opts.image,
        imageTitle = opts.imageTitle,
        imageSubtitle = opts.imageSubtitle,
        style = opts.style;

    if (typeof title !== "string") {
      throw new Error("InteractiveMessage title is required");
    }

    this.title = title;
    this.subtitle = subtitle;
    this.secondarySubtitle = secondarySubtitle;
    this.tertiarySubtitle = tertiarySubtitle;
    this.image = image;
    this.imageTitle = imageTitle;
    this.imageSubtitle = imageSubtitle;
    this.style = style;
  }

  _createClass(InteractiveMessage, [{
    key: "toJSON",
    value: function toJSON() {
      var title = this.title,
          subtitle = this.subtitle,
          secondarySubtitle = this.secondarySubtitle,
          tertiarySubtitle = this.tertiarySubtitle,
          image = this.image,
          imageTitle = this.imageTitle,
          imageSubtitle = this.imageSubtitle,
          style = this.style;
      return {
        title: title,
        subtitle: subtitle,
        secondarySubtitle: secondarySubtitle,
        tertiarySubtitle: tertiarySubtitle,
        image: image,
        imageTitle: imageTitle,
        imageSubtitle: imageSubtitle,
        style: style
      };
    }
  }]);

  return InteractiveMessage;
}();

exports.default = InteractiveMessage;