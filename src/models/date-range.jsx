import Moment from 'moment';

class DateRange {
   constructor () {
      this.startDate = Moment().startOf('month');
      this.endDate = Moment().endOf('month');

      // var date = new Date(), y = date.getFullYear(), m = date.getMonth();
      // this.startDate = new Date(y, m, 1);
      // this.endDate = new Date(y, m + 1, 0);
   }
   startDate;
   endDate;
   focusedInput;
}

export default DateRange