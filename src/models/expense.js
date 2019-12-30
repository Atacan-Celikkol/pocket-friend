class Expense {

   amount = 0;
   description = '';
   on_date = new Date().toISOString().split('T')[0];
   
   constructor(amount = 0, description = '', on_date = new Date()) {
      console.log(amount, description, on_date);
      
      this.amount = amount;
      this.description = description;
      this.on_date = new Date(on_date).toISOString().split('T')[0];
   }
}

export default Expense;