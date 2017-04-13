'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Component that represents a URL to an image, video or audio file. Used on Templates like Card and Image.
 * @class
 * @property {string} url - URL to the media file
 **/
var Media = function () {
  /**
   * @param {string} url - Required
   **/
  function Media(url) {
    _classCallCheck(this, Media);

    if (typeof url !== 'string' || url.length === 0) {
      throw new Error('url is mandatory ' + url);
    }
    this.url = url;
  }

  _createClass(Media, [{
    key: 'toJSON',
    value: function toJSON() {
      var url = this.url;


      return url;
    }
  }]);

  return Media;
}();

exports.default = Media;