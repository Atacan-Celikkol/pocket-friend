import Moment from 'moment';

export default class DateRange {
   constructor() {
      this.startDate = Moment().startOf('month').format("YYYY-MM-DD");
      this.endDate = Moment().endOf('month').format("YYYY-MM-DD");

      // var date = new Date(), y = date.getFullYear(), m = date.getMonth();
      // this.startDate = new Date(y, m, 1);
      // this.endDate = new Date(y, m + 1, 0);
   }
   startDate;
   endDate;
}
