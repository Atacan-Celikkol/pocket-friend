class Expense {
   on_date = new Date().toISOString().split('T')[0];
   description = '';
   amount = 0;
}

export default Expense