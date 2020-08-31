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
 * Component that represents a video asset used with a {@link RichLink} template
 * 
 * @memberof Apple
 * @category RichLink
 * 
 * @property {string} url - Required. URL to the video
 * @property {string} mimeType - Required. A string representing the format/type of the video; for example, video/mp4, video/mpeg
 **/
var VideoAsset = /*#__PURE__*/function () {
  /**
   * @param {object} opts - Collection of options
   * @param {string} opts.url - Required. URL to the video
   * @param {string} opts.mimeType - Required. The format/type of the video
  **/
  function VideoAsset(opts) {
    _classCallCheck(this, VideoAsset);

    if (_typeof(opts) !== "object") {
      throw new Error("To create a VideoAsset you need a url and mimeType");
    }

    var url = opts.url,
        mimeType = opts.mimeType;

    if (typeof url !== "string" || !url.length) {
      throw new Error("VideoAsset url is required");
    }

    if (typeof mimeType !== "string" || !mimeType.length) {
      throw new Error("VideoAsset mimeType is required");
    }

    this.url = url;
    this.mimeType = mimeType;
  }

  _createClass(VideoAsset, [{
    key: "toJSON",
    value: function toJSON() {
      var url = this.url,
          mimeType = this.mimeType;
      return {
        type: 'video',
        url: url,
        mimeType: mimeType
      };
    }
  }]);

  return VideoAsset;
}();

var _default = VideoAsset;
exports.default = _default;