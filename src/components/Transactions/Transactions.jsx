import React from 'react';
import DateRange from '../../models/date-range';
import Expense from '../../models/Expense';
import Income from '../../models/Income';
import * as alertService from '../../services/AlertService';
import { sortTypes } from '../../services/ApiService';
import * as expenseService from '../../services/ExpenseService';
import * as incomeService from '../../services/IncomeService';
import Loader from '../Loader/Loader';
import PFDayPicker from './DayPicker/DayPicker';
import Expenses from './Expenses/Expenses';
import Incomes from './Incomes/Incomes';
import Summary from './Summary/Summary';
import './Transactions.scss';



let incomes = [];
let expenses = [];
let incomesTotal = 0;
let expensesTotal = 0;
let incomesLoading = true;
let expensesLoading = true;

class Transactions extends React.Component {
    constructor(props) {
        super(props);
        this.state = new DateRange();
        this.getIncomesAsync = this.getIncomesAsync.bind(this);
        this.getExpensesAsync = this.getExpensesAsync.bind(this);
        this.getTransactions = this.getTransactions.bind(this);
        this.deleteIncome = this.deleteIncome.bind(this);
        this.deleteExpense = this.deleteExpense.bind(this);
        this.newIncome = this.newIncome.bind(this);
        this.newExpense = this.newExpense.bind(this);
        this.updateIncome = this.updateIncome.bind(this);
        this.updateExpense = this.updateExpense.bind(this);
    }

    componentDidMount() {
        this.getTransactions();
    }

    getTransactions() {
        this.getIncomesAsync();
        this.getExpensesAsync();
    }

    orderByDate(a, b) { return b.on_date - a.on_date; }

    async getIncomesAsync() {
        incomes = [];
        incomesLoading = true;
        incomesTotal = 0;
        this.setState(this.state);
        incomeService.GetIncomesAsync(this.state, 'on_date', sortTypes.Descending).then(x => {
            incomes = x;
            incomes.forEach(x => incomesTotal += x.amount);
            incomesLoading = false;
            this.setState(this.state);
        });
    }

    async getExpensesAsync() {
        expenses = [];
        expensesLoading = true;
        expensesTotal = 0;
        this.setState(this.state);
        expenseService.GetExpensesAsync(this.state, 'on_date', sortTypes.Descending).then(x => {
            expenses = x;
            expenses.forEach(x => expensesTotal += x.amount);
            expensesLoading = false;
            this.setState(this.state);
        });
    }

    deleteIncome(e, item) {
        alertService.ShowDeleteConfirmation().then((result) => {
            result.value &&
                incomeService.DeleteIncomeAsync(item.objectId).then(x => {
                    incomes = incomes.filter(t => t.objectId !== item.objectId);
                    incomesTotal -= item.amount;
                    this.setState(this.state);
                    alertService.ShowDeleteSuccess();
                });
        });
    }

    deleteExpense(e, item) {
        alertService.ShowDeleteConfirmation().then((result) => {
            result.value &&
                expenseService.DeleteExpenseAsync(item.objectId).then(x => {
                    expenses = expenses.filter(t => t.objectId !== item.objectId);
                    expensesTotal -= item.amount;
                    this.setState(this.state);
                    alertService.ShowDeleteSuccess();
                });
        });
    }

    newIncome() {
        const income = new Income();
        const queueItems = [
            {
                input: 'text', title: 'Amount', inputValidator: (value) => {
                    if (!value || isNaN(value)) {
                        return 'I said amount... 😢';
                    }
                }
            },
            {
                title: 'Date',
                html: <input type="date" className={"swal2-input"} defaultValue={income.on_date} onChange={x => income.on_date = x.target.value} />
            },
            { input: 'text', title: 'Description' }
        ];
        alertService.ShowQueue(['1', '2', '3'], queueItems).then(result => {
            if (result.value) {
                income.amount = Number(result.value[0]);
                income.description = result.value[2];
                incomeService.CreateIncomeAsync(income).then(x => {
                    incomes.push(x);
                    incomes.sort(this.orderByDate);
                    incomesTotal += x.amount;
                    this.setState(this.state);
                });
            }
        });
    }

    newExpense() {
        const expense = new Expense();
        const queueItems = [
            {
                input: 'text', title: 'Amount', inputValidator: (value) => {
                    if (!value || isNaN(value)) {
                        return 'I said amount... 😢';
                    }
                }
            },
            {
                title: 'Date',
                html: <input type="date" className={"swal2-input"} defaultValue={expense.on_date} onChange={x => expense.on_date = x.target.value} />
            },
            { input: 'text', title: 'Description' }
        ];
        alertService.ShowQueue(['1', '2', '3'], queueItems).then(result => {
            if (result.value) {
                expense.amount = Number(result.value[0]);
                expense.description = result.value[2];
                expenseService.CreateExpenseAsync(expense).then(x => {
                    expenses.push(x);
                    expenses.sort(this.orderByDate);
                    expensesTotal += x.amount;
                    this.setState(this.state);
                });
            }
        });
    }

    updateIncome(e, item) {
        const income = new Income(item.amount, item.description, item.on_date);
        const queueItems = [
            {
                input: 'text', inputValue: income.amount, title: 'Amount', inputValidator: (value) => {
                    if (!value || isNaN(value)) {
                        return 'I said amount... 😢';
                    }
                }
            },
            {
                title: 'Date',
                html: <input type="date" className={"swal2-input"} defaultValue={income.on_date} onChange={x => income.on_date = x.target.value} />
            },
            { input: 'text', inputValue: income.description, title: 'Description' }
        ];
        alertService.ShowQueue(['1', '2', '3'], queueItems).then(result => {
            if (result.value) {
                income.amount = Number(result.value[0]);
                income.description = result.value[2];

                incomeService.UpdateIncomeAsync(income, item.objectId).then(x => {
                    incomes.splice(incomes.findIndex(x => x.objectId === item.objectId), 1, x);
                    incomes.sort(this.orderByDate);
                    incomesTotal += (x.amount - item.amount);
                    this.setState(this.state);
                });
            }
        });
    }

    updateExpense(e, item) {
        const expense = new Expense(item.amount, item.description, item.on_date);
        const queueItems = [
            {
                input: 'text', inputValue: expense.amount, title: 'Amount', inputValidator: (value) => {
                    if (!value || isNaN(value)) {
                        return 'I said amount... 😢';
                    }
                }
            },
            {
                title: 'Date',
                html: <input type="date" className={"swal2-input"} defaultValue={expense.on_date} onChange={x => expense.on_date = x.target.value} />
            },
            { input: 'text', inputValue: expense.description, title: 'Description' }
        ];
        alertService.ShowQueue(['1', '2', '3'], queueItems).then(result => {
            if (result.value) {
                expense.amount = Number(result.value[0]);
                expense.description = result.value[2];

                expenseService.UpdateExpenseAsync(expense, item.objectId).then(x => {
                    expenses.splice(expenses.findIndex(x => x.objectId === item.objectId), 1, x);
                    expenses.sort(this.orderByDate);
                    expensesTotal += (x.amount - item.amount);
                    this.setState(this.state);
                });
            }
        });
    }


    render() {
        return (
            <div>
                <div className={'summary-container'}>
                    <PFDayPicker />
                    <Summary incomes={incomesTotal} expenses={expensesTotal} />
                </div>

                <hr />

                <div>

                    <div className="d-flex">
                        <h3 className="text-success" >Incomes</h3>
                        <div className="d-flex ml-2">
                            <button className="btn btn-sm btn-success m-auto" onClick={this.newIncome}>
                                <i className="icon-add" />
                            </button>
                        </div>
                    </div>
                    {incomesLoading ? <Loader color="#3A3" /> : (incomes.length > 0 ? <Incomes incomes={incomes} delete={this.deleteIncome} update={this.updateIncome} /> : '- You have no incomes. 😢')}
                    <br />
                    <div className="d-flex">
                        <h3 className="text-danger">Expenses</h3>
                        <div className="d-flex ml-2">
                            <button className="btn btn-sm btn-danger m-auto" onClick={this.newExpense}>
                                <i className="icon-add" />
                            </button>
                        </div>
                    </div>
                    {expensesLoading ? <Loader color="#f33" /> : (expenses.length > 0 ? <Expenses expenses={expenses} delete={this.deleteExpense} update={this.updateExpense} /> : '- You have no expenses! 😁')}
                </div>
            </div>
        );

    }
}

export default Transactions;