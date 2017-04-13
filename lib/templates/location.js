'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

var _action = require('../components/action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Template with a location
 * @property {string} title - Describes the image
 * @property {string} lat - Latitude
 * @property {string} long - Longitude
 * @property {Action} action - Optional Action
 **/
var Location = function (_Template) {
  _inherits(Location, _Template);

  /**
   * @param {string} opts.title - Required
   * @param {string} opts.lat - Required
   * @param {string} opts.long - Required
   * @param {string} opts.action - Optional
   **/
  function Location(_ref) {
    var title = _ref.title,
        lat = _ref.lat,
        long = _ref.long,
        action = _ref.action;

    _classCallCheck(this, Location);

    var _this = _possibleConstructorReturn(this, (Location.__proto__ || Object.getPrototypeOf(Location)).call(this));

    if (typeof title !== 'string' || title.length === 0) {
      throw new Error('Title is mandatory');
    }

    _this.title = title;

    if (!lat) {
      throw new Error('Latitude is mandatory');
    }

    _this.lat = lat;

    if (!long) {
      throw new Error('Longitude is mandatory');
    }

    _this.long = long;

    _this.action = action || undefined;
    return _this;
  }

  _createClass(Location, [{
    key: 'toJSON',
    value: function toJSON() {
      var title = this.title,
          lat = this.lat,
          long = this.long,
          action = this.action,
          quickReplies = this.quickReplies;


      return {
        type: 'location',
        payload: {
          title: title,
          lat: lat,
          long: long,
          action: action,
          quickReplies: quickReplies
        }
      };
    }
  }, {
    key: 'action',
    set: function set(action) {
      if (action && !(action instanceof _action2.default)) {
        throw new Error('action must be an instance of Action');
      }

      this._action = action;
    },
    get: function get() {
      return this._action;
    }
  }]);

  return Location;
}(_template2.default);

exports.default = Location;