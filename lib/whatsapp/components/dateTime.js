"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 *
 * @category Whatsapp
 *
 * @property {string} fallback_value
 * @property {number} day_of_week
 * @property {number} day_of_month
 * @property {number} year
 * @property {number} month
 * @property {number} hour
 * @property {number} minute
 **/
var DateTime = /*#__PURE__*/function () {
  /**
   * @param {string} opts.fallback_value
   * @param {number} opts.day_of_week
   * @param {number} opts.day_of_month
   * @param {number} opts.year
   * @param {number} opts.month
   * @param {number} opts.hour
   * @param {number} opts.minute
   **/
  function DateTime(_ref) {
    var fallback_value = _ref.fallback_value,
        day_of_week = _ref.day_of_week,
        day_of_month = _ref.day_of_month,
        year = _ref.year,
        month = _ref.month,
        hour = _ref.hour,
        minute = _ref.minute;

    _classCallCheck(this, DateTime);

    if (typeof fallback_value !== 'string' || fallback_value.length === 0) {
      throw new Error('Fallback is mandatory');
    }

    if (typeof day_of_week !== 'number') {
      throw new Error('Day of week is mandatory');
    }

    if (typeof day_of_month !== 'number') {
      throw new Error('Day of month is mandatory');
    }

    if (typeof year !== 'number') {
      throw new Error('Year is mandatory');
    }

    if (typeof month !== 'number') {
      throw new Error('Month is mandatory');
    }

    if (typeof hour !== 'number') {
      throw new Error('Hour is mandatory');
    }

    if (typeof minute !== 'number') {
      throw new Error('Minute is mandatory');
    }

    this.fallback_value = fallback_value;
    this.day_of_week = day_of_week;
    this.day_of_month = day_of_month;
    this.year = year;
    this.month = month;
    this.hour = hour;
    this.minute = minute;
  }

  _createClass(DateTime, [{
    key: "toJSON",
    value: function toJSON() {
      var fallback_value = this.fallback_value,
          day_of_week = this.day_of_week,
          day_of_month = this.day_of_month,
          year = this.year,
          month = this.month,
          hour = this.hour,
          minute = this.minute;
      return {
        type: 'date_time',
        date_time: {
          fallback_value: fallback_value,
          day_of_week: day_of_week,
          day_of_month: day_of_month,
          year: year,
          month: month,
          hour: hour,
          minute: minute
        }
      };
    }
  }]);

  return DateTime;
}();

var _default = DateTime;
exports.default = _default;