"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * A media file within a rich  {@link Card}
 * 
 * @memberof GBM
 * @category Components
 * 
 * @property {string} height - Optional. The height of the media within a rich card. SHORT = 112 DP. MEDIUM = 168 DP. TALL = 264 DP. Not available for rich card carousels when the card width is set to SMALL.
 * @property {string} fileUrl - Required. Publicly reachable URL of the file. The platform determines the MIME type of the file from the content-type field in the HTTP headers when the platform fetches the file. The content-type field must be present and accurate in the HTTP response from the URL. Maximum 5 MB. Supported content types: image/jpeg, image/jpg, image/png
 * @property {string} thumbnailUrl - Optional. Publicly reachable URL of the thumbnail. If you don't provide a thumbnail URL, the platform displays a blank placeholder thumbnail until the user's device downloads the file. Maximum 25 KB. Supported content types: image/jpeg, image/jpg, image/png
 * @property {string} forceRefresh - Optional. If set, the platform fetches the file and thumbnail from the specified URLs, even if the platform has cached copies of the file (and/or of the thumbnail).
 * @property {string} altText - Optional. Text describing the details about the media for accessibility purposes.
 **/
var Media = /*#__PURE__*/function () {
  /**
   * @param {string} opts.height - Optional
   * @param {string} opts.fileUrl - Required
   * @param {string} opts.thumbnailUrl - Optional
   * @param {bool} opts.forceRefresh - Optional
   * @param {bool} opts.forceRefresh - Optional
   **/
  function Media(opts) {
    _classCallCheck(this, Media);

    if (!opts) {
      throw new Error("You should provide a fileUrl for a Media component");
    }

    var fileUrl = opts.fileUrl,
        thumbnailUrl = opts.thumbnailUrl,
        forceRefresh = opts.forceRefresh,
        altText = opts.altText;

    if (typeof fileUrl !== 'string' || !fileUrl.length) {
      throw new Error("The Media component fileUrl is required and must be a valid URL");
    }

    if (typeof thumbnailUrl === 'string' && !fileUrl.length) {
      throw new Error("The Media component thumbnailUrl must be a valid URL");
    }

    if (typeof altText === 'string' && !type.length) {
      throw new Error("Media alt text must be a valid string");
    }

    this.fileUrl = fileUrl;
    this.thumbnailUrl = thumbnailUrl || undefined;
    this.forceRefresh = forceRefresh || false;
    this.altText = altText || undefined;
  }

  _createClass(Media, [{
    key: "toJSON",
    value: function toJSON() {
      var fileUrl = this.fileUrl,
          thumbnailUrl = this.thumbnailUrl,
          forceRefresh = this.forceRefresh,
          altText = this.altText;
      return {
        fileUrl: fileUrl,
        thumbnailUrl: thumbnailUrl,
        forceRefresh: forceRefresh,
        altText: altText
      };
    }
  }]);

  return Media;
}();

Media.HEIGHT = {
  HEIGHT_UNSPECIFIED: 'HEIGHT_UNSPECIFIED',
  SHORT: 'SHORT',
  MEDIUM: 'MEDIUM',
  TALL: 'TALL'
};
var _default = Media;
exports.default = _default;