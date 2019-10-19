class Expense {
   date = new Date().toISOString().split('T')[0];
   text = '';
   amount = 0;
}

export default Expense