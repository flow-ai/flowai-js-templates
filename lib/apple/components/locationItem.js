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
 * Component that represents a location inside a {@link TimePicker}
 * 
 * @memberof Apple
 * @category TimePicker
 * 
 * @property {float} latitude - A double representing the latitude of the location
 * @property {float} longitude - A double representing the longitude of the location
 * @property {float} radius - A double representing the location radius, in meters. Business Chat ignores this field when latitude and longitude are missing or empty.
 * @property {string} title - Required title
 **/
var LocationItem = /*#__PURE__*/function () {
  /**
   * @param {object} opts - Collection of options
   * @param {float} opts.latitude - Latitude of the location
   * @param {float} opts.longitude - Longitude of the location
   * @param {float} opts.radius - A double representing the location radius in meters
   * @param {string} opts.title - Required title
   **/
  function LocationItem(opts) {
    _classCallCheck(this, LocationItem);

    if (_typeof(opts) !== "object") {
      throw new Error("To create a LocationItem you at least need a title");
    }

    var latitude = opts.latitude,
        longitude = opts.longitude,
        radius = opts.radius,
        title = opts.title;

    if (typeof latitude !== "undefined") {
      var parsedValue = parseFloat(latitude);

      if (isNaN(parsedValue)) {
        throw new Error("Provided latitude must be a float");
      }

      this.latitude = parsedValue;
    }

    if (typeof longitude !== "undefined") {
      var _parsedValue = parseFloat(longitude);

      if (isNaN(_parsedValue)) {
        throw new Error("Provided longitude must be a float");
      }

      this.longitude = _parsedValue;
    }

    if (typeof radius !== "undefined") {
      var _parsedValue2 = parseFloat(radius);

      if (isNaN(_parsedValue2)) {
        throw new Error("Provided radius must be a float");
      }

      this.radius = _parsedValue2;
    }

    if (typeof title !== "string") {
      throw new Error("LocationItem title is required");
    }

    if (!title.length) {
      throw new Error("Provided LocationItem title is empty");
    }

    this.title = title || undefined;
  }

  _createClass(LocationItem, [{
    key: "toJSON",
    value: function toJSON() {
      var latitude = this.latitude,
          longitude = this.longitude,
          radius = this.radius,
          style = this.style,
          title = this.title,
          subtitle = this.subtitle;
      return {
        latitude: latitude,
        longitude: longitude,
        radius: radius,
        style: style,
        title: title,
        subtitle: subtitle
      };
    }
  }]);

  return LocationItem;
}();

var _default = LocationItem;
exports.default = _default;