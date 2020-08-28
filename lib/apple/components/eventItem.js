"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LocationItem = require("./locationItem");

var TimeItem = require("./timeItem");
/**
 * Component that represents an event inside a TimePicker
 * 
 * @memberof Apple
 * @property {string} identifier - Field identifying the item
 * @property {string} image - Optional URL to an image. The image should be a @3x image sized at 375 x 208 points (that is, 1125 x 624 pixels).
 * @property {LocationItem} location - Describes a location
 * @property {array} timeslots - A list of TimeItem objects 
 * @property {integer} timezoneOffset - An integer representing the number of minutes from GMT, specifying the timezone of the event’s location. If not set, times are shown according to the customer’s current time zone. If set, the times are shown according to the event’s time zone, regardless of the customer’s location.
 * @property {string} title - Required title
 **/


var EventItem = /*#__PURE__*/function () {
  /**
   * @param {object} opts - Collection of options
   * @param {string} opts.identifier - Optional identifier
   * @param {string} opts.image - Optional URL to an image.
   * @param {array} opts.timeslots - Optional array of TimeItem objects 
   * @param {integer} opts.timezoneOffset - Optional integer representing the number of minutes from GMT
   * @param {string} opts.title - Required title
   **/
  function EventItem(opts) {
    _classCallCheck(this, EventItem);

    if (_typeof(opts) !== "object") {
      throw new Error("To create a EventItem you at least need a title");
    }

    var identifier = opts.identifier,
        image = opts.image,
        location = opts.location,
        timeslots = opts.timeslots,
        timezoneOffset = opts.timezoneOffset,
        title = opts.title;

    if (typeof identifier !== "undefined" && typeof identifier !== "string") {
      throw new Error("Provided EventItem identifier must be unique string");
    }

    if (typeof location !== "undefined" && !(location instanceof LocationItem)) {
      throw new Error('Provided location must be an instance of a Apple.LocationItem');
    }

    if (Array.isArray(timeslots)) {
      for (var i = 0; i < timeslots.length; i++) {
        this.addTimeslot(timeslots[i]);
      }
    }

    if (typeof timezoneOffset !== "undefined") {
      var parsedValue = parseInt(timezoneOffset);

      if (isNaN(parsedValue)) {
        throw new Error("Provided timezoneOffset must be an integer");
      }

      this.timezoneOffset = parsedValue;
    }

    if (typeof title !== "string") {
      throw new Error("EventItem title is required");
    }

    if (!title.length) {
      throw new Error("Provided EventItem title is empty");
    }

    this.identifier = identifier || Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.image = image || undefined;
    this.location = location || undefined;
    this.title = title || undefined;
  }
  /**
   * Add a TimeItem to the list of timeslots
   * 
   * @param {TimeItem} - item
   * 
   * @return {EventItem}
   **/


  _createClass(EventItem, [{
    key: "addTimeslot",
    value: function addTimeslot(item) {
      if (!(item instanceof TimeItem)) {
        throw new Error('EventItem addTimeslot argument must be an instance of a Apple.TimeItem');
      }

      if (!this.timeslots) {
        this.timeslots = [];
      }

      this.timeslots.push(item);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var identifier = this.identifier,
          image = this.image,
          location = this.location,
          timeslots = this.timeslots,
          timezoneOffset = this.timezoneOffset,
          title = this.title;
      return {
        identifier: identifier,
        image: image,
        location: location,
        timeslots: timeslots,
        timezoneOffset: timezoneOffset,
        title: title
      };
    }
  }]);

  return EventItem;
}();

var _default = EventItem;
exports.default = _default;