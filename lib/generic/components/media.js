"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Component that represents a URL to an image, video or audio file. Used with templates like {@link Card} and {@link Image}.
 * 
 * @category Components
 * 
 * @property {string} url - URL to the media file
 **/
var Media = /*#__PURE__*/function () {
  /**
   * @param {string} opts.url - Required
   * @param {string} opts.type - Required
   **/
  function Media(opts) {
    _classCallCheck(this, Media);

    if (!opts) {
      throw new Error("You should provide an url and type for a Media component");
    }

    if (typeof opts === 'string') {
      throw new Error("You should provide an url and type not a string for a Media component");
    }

    var url = opts.url,
        type = opts.type;

    if (typeof url !== 'string' || url.length === 0) {
      throw new Error("url is mandatory for a Media component");
    }

    if (typeof type !== 'string' || type.length === 0) {
      throw new Error("type is mandatory for a Media component");
    }

    this.url = url;
    this.type = type;
  }

  _createClass(Media, [{
    key: "toJSON",
    value: function toJSON() {
      var url = this.url,
          type = this.type;
      return {
        url: url,
        type: type
      };
    }
  }]);

  return Media;
}();

var _default = Media;
exports.default = _default;