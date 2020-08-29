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
 * Component that represents an image asset used with a {@link RichLink} template
 * 
 * @memberof Apple
 * @category RichLink
 * 
 * @property {string} url - Required. URL to the image
 * @property {string} mimeType - Required. A string representing the format/type of the image; for example, image/jpeg, image/png
 **/
var ImageAsset = /*#__PURE__*/function () {
  /**
   * @param {string} url - Required. URL to the image
   * @param {string} mimeType - Required. The format/type of the image
   **/
  function ImageAsset(opts) {
    _classCallCheck(this, ImageAsset);

    if (_typeof(opts) !== "object") {
      throw new Error("To create an ImageAsset you need a url and mimeType");
    }

    var url = opts.url,
        mimeType = opts.mimeType;

    if (typeof url !== "string" || !url.length) {
      throw new Error("ImageAsset url is required");
    }

    if (typeof mimeType !== "string" || !mimeType.length) {
      throw new Error("ImageAsset mimeType is required");
    }

    this.url = url;
    this.mimeType = mimeType;
  }

  _createClass(ImageAsset, [{
    key: "toJSON",
    value: function toJSON() {
      var url = this.url,
          mimeType = this.mimeType;
      return {
        type: 'image',
        url: url,
        mimeType: mimeType
      };
    }
  }]);

  return ImageAsset;
}();

var _default = ImageAsset;
exports.default = _default;