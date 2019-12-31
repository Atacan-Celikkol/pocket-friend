import moment from "moment";

class Income {
   amount = 0;
   description = '';
   on_date = new Date();

   constructor (amount = 0, description = '', on_date = new Date()) {
      this.amount = amount;
      this.description = description;
      this.on_date = moment(on_date).format('YYYY-MM-DD');
   }
}

export default Income;