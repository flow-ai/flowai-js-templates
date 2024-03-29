
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
class DateTime {
  /**
   * @param {string} opts.fallback_value
   * @param {number} opts.day_of_week
   * @param {number} opts.day_of_month
   * @param {number} opts.year
   * @param {number} opts.month
   * @param {number} opts.hour
   * @param {number} opts.minute
   **/
  constructor({ fallback_value, day_of_week, day_of_month, year, month, hour, minute }) {

    if(typeof fallback_value !== 'string' || fallback_value.length === 0){
      throw new Error('Fallback is mandatory')
    }
    if(typeof day_of_month !== 'number'){
      throw new Error('Day of month is mandatory')
    }
    if(typeof year !== 'number'){
      throw new Error('Year is mandatory')
    }
    if(typeof month !== 'number'){
      throw new Error('Month is mandatory')
    }
    if(typeof hour !== 'number'){
      throw new Error('Hour is mandatory')
    }
    if(typeof minute !== 'number'){
      throw new Error('Minute is mandatory')
    }

    this.fallback_value = fallback_value
    this.day_of_week = day_of_week || undefined
    this.day_of_month = day_of_month
    this.year = year
    this.month = month
    this.hour = hour
    this.minute = minute
  }

  toJSON() {
    const {
      fallback_value,
      day_of_week,
      day_of_month,
      year,
      month,
      hour,
      minute,
    } = this

    return {
      type: 'date_time',
      date_time: {
        fallback_value,
        day_of_week,
        day_of_month,
        year,
        month,
        hour,
        minute,
      }
    }
  }
}

export default DateTime
