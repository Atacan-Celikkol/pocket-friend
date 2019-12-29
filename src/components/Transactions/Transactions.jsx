import React from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import DateRange from '../../models/date-range';
import * as alertService from '../../services/AlertService';
import { sortTypes } from '../../services/ApiService';
import * as expenseService from '../../services/ExpenseService';
import * as incomeService from '../../services/IncomeService';
import Expenses from '../Expenses/Expense';
import Incomes from '../Incomes/Incomes';
import Summary from './Summary/Summary';
import './Transactions.scss';


let incomes = [];
let expenses = [];
let incomesTotal = 0;
let expensesTotal = 0;
let incomesLoading = true;
let expensesLoading = true;

class Transactions extends React.Component {
    constructor (props) {
        super(props);
        this.state = new DateRange();
        this.getIncomesAsync = this.getIncomesAsync.bind(this);
        this.getExpensesAsync = this.getExpensesAsync.bind(this);
        this.getTransactions = this.getTransactions.bind(this);
        this.deleteIncome = this.deleteIncome.bind(this);
        this.deleteExpense = this.deleteExpense.bind(this);
        this.newIncome = this.newIncome.bind(this);
    }

    componentDidMount() {
        // this.getTransactions();
    }

    getTransactions() {
        this.getIncomesAsync().then(incomesLoading = false);
        this.getExpensesAsync().then(expensesLoading = false);
    }

    async getIncomesAsync() {
        incomesTotal = 0;
        incomeService.GetIncomesAsync(this.state, 'on_date', sortTypes.Descending).then(x => {
            incomes = x;
            incomes.forEach(x => incomesTotal += x.amount);
            this.setState(this.state);
        });
    }

    async getExpensesAsync() {
        expensesTotal = 0;
        expenseService.GetExpensesAsync(this.state, 'on_date', sortTypes.Descending).then(x => {
            expenses = x;
            expenses.forEach(x => expensesTotal += x.amount);
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
        const queueItems = [
            {
                input: 'text', title: 'Amount', inputValidator: (value) => {
                    if (!value || isNaN(value)) {
                        return 'I said amount... 😢';
                    }
                }
            },
            { input: 'text', title: 'Description' }
        ];
        alertService.ShowQueue(['1', '2'], queueItems).then(result => {
            incomeService.CreateIncomeAsync({ amount: Number(result.value[0]), description: result.value[1] });
        });

    }


    render() {
        return (
            <div>
                <div className={ 'summary-container' }>
                    <DateRangePicker
                        startDate={ this.state.startDate } // momentPropTypes.momentObj or null,
                        startDateId="start-date-input" // PropTypes.string.isRequired,
                        endDate={ this.state.endDate } // momentPropTypes.momentObj or null,
                        endDateId="end-date-input" // PropTypes.string.isRequired,
                        onDatesChange={ ({ startDate, endDate }) => this.setState({ startDate, endDate }) } // PropTypes.func.isRequired,
                        focusedInput={ this.state.focusedInput } // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={ focusedInput => this.setState({ focusedInput }) } // PropTypes.func.isRequired,
                        isOutsideRange={ () => false }
                        renderCalendarInfo={ () => false }
                        small={ false }
                        withPortal={ true }
                        noBorder={ true }
                        block={ true }
                        readOnly={ true }
                        hideKeyboardShortcutsPanel={ true }
                        numberOfMonths={ 1 }
                        firstDayOfWeek={ 1 }
                        displayFormat={ 'DD.MM.YYYY' }
                        onClose={ () => setTimeout(() => this.getTransactions(), 100) }
                    />
                    <Summary incomes={ incomesTotal } expenses={ expensesTotal } />
                </div>

                <hr />

                <div>

                    <div className="d-flex">
                        <h3 className="text-success" >Incomes</h3>
                        <div className="d-flex ml-2">
                            <button className="btn btn-sm btn-success m-auto" onClick={ this.newIncome }>
                                <i className="icon-add" />
                            </button>
                        </div>
                    </div>
                    { incomesLoading ? 'Loading...' : (incomes.length > 0 ? <Incomes incomes={ incomes } delete={ this.deleteIncome } /> : '- You have no incomes. 😢') }
                    <br />
                    <div className="d-flex">
                        <h3 className="text-danger">Expenses</h3>
                        <div className="d-flex ml-2">
                            <button className="btn btn-sm btn-danger m-auto">
                                <i className="icon-add" />
                            </button>
                        </div>
                    </div>
                    { expensesLoading ? 'Loading...' : (expenses.length > 0 ? <Expenses expenses={ expenses } delete={ this.deleteExpense } /> : '- You have no expenses! 😁') }
                </div>
            </div>
        );

    }
}

export default Transactions;