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
 * Component that represents an item inside a TimeSection
 * 
 * @memberof Apple
 * @property {string} identifier - Field identifying the item
 * @property {float} duration - An integer representing the duration of the time slot, in seconds
 * @property {string} startTime - A UTC date string, represented by a valid date in ISO-8601 format and specified as absolute GMT +0000 date; for example, 2017-05-26T08:27:55+00:00, 2017-05-26T08:27:55+0000, or 2017-05-26T08:27:55Z. The timezoneOffset, from the EventItem dictionary, determines whether the startTime is in a specific time zone or in the customer's current time zone
 **/
var TimeItem = /*#__PURE__*/function () {
  /**
   * @param {object} opts - Collection of options
   * @param {float} opts.duration - Required duration of the time slot, in seconds
   * @param {string} opts.identifier - Optional Unique identifier
   * @param {string} opts.startTime - Required UTC date string
   **/
  function TimeItem(opts) {
    _classCallCheck(this, TimeItem);

    if (_typeof(opts) !== "object") {
      throw new Error("To create a TimeItem you at least need a startTime");
    }

    var duration = opts.duration,
        identifier = opts.identifier,
        startTime = opts.startTime;
    var parsedDuration = parseInt(duration);

    if (isNaN(parsedDuration) || parsedDuration < 0) {
      throw new Error("Provided TimeItem duration must be a positive number");
    }

    this.duration = parsedDuration;

    if (typeof identifier !== "undefined" && typeof identifier !== "string") {
      throw new Error("Provided TimeItem identifier must be unique string");
    }

    if (typeof startTime !== "string" && !(startTime instanceof Date)) {
      throw new Error("TimeItem startTime is required and must be a valid UTC date time");
    }

    if (startTime instanceof Date) {
      this.startTime = startTime.toISOString();
    } else {
      this.startTime = startTime;
    }
  }

  _createClass(TimeItem, [{
    key: "toJSON",
    value: function toJSON() {
      var latitude = this.latitude,
          longitude = this.longitude,
          duration = this.duration,
          style = this.style,
          startTime = this.startTime,
          substartTime = this.substartTime;
      return {
        latitude: latitude,
        longitude: longitude,
        duration: duration,
        style: style,
        startTime: startTime,
        substartTime: substartTime
      };
    }
  }]);

  return TimeItem;
}();

var _default = TimeItem;
exports.default = _default;