"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 
 * @category Whatsapp
 *
 * @property {string} type - type of the header (text, video, document or image)
 * @property {string} value - value of the header or link
 * @example
 * new Header({
 *  type: 'video',
 *  value: 'http://example.com'
 * })
 **/
var Header = /*#__PURE__*/function () {
  /**
   * @param {string} opts.type - Required, type of the header
   * @param {string} opts.value - Required, value of the header
   * @param {string} opts.fileName - Optional
   * @param {string} opts.providerName - Optional
   **/
  function Header(_ref) {
    var type = _ref.type,
        value = _ref.value,
        fileName = _ref.fileName,
        providerName = _ref.providerName;

    _classCallCheck(this, Header);

    if (typeof type !== 'string' || type.length === 0) {
      throw new Error('Header type is mandatory');
    }

    if (type !== 'image' && type !== 'document' && type !== 'text' && type !== 'video') {
      throw new Error('Header type is must be text, video, image or document');
    }

    if (typeof value !== 'string' || value.length === 0) {
      throw new Error('Header value is mandatory');
    }

    this.type = type;
    this.value = value;
    this.fileName = fileName;
    this.providerName = providerName;
  }

  _createClass(Header, [{
    key: "toJSON",
    value: function toJSON() {
      var type = this.type,
          value = this.value,
          providerName = this.providerName,
          fileName = this.fileName;

      if (type === 'text') {
        return {
          type: type,
          text: value
        };
      }

      if (providerName && fileName) {
        return _defineProperty({
          type: type
        }, type, {
          link: value,
          provider: {
            name: providerName
          },
          fileName: fileName
        });
      }

      if (providerName) {
        return _defineProperty({
          type: type
        }, type, {
          link: value,
          provider: {
            name: providerName
          }
        });
      }

      if (fileName) {
        return _defineProperty({
          type: type
        }, type, {
          link: value,
          fileName: fileName
        });
      }

      return _defineProperty({
        type: type
      }, type, {
        link: value
      });
    }
  }]);

  return Header;
}();

var _default = Header;
exports.default = _default;