import React from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import DateRange from '../../models/date-range';
import { sortTypes } from '../../services/ApiService';
import * as expenseService from '../../services/ExpenseService';
import * as incomeService from '../../services/IncomeService';
import Expenses from '../Expenses/index';
import Incomes from '../Incomes/Incomes';
import Summary from './Summary/Summary';
import './Transactions.scss';

const swal = withReactContent(Swal);

let incomes = [];
let expenses = [];
let incomesTotal = 0;
let expensesTotal = 0;
let incomesLoading = true;
let expensesLoading = true;

// let incomeService = require('../../services/IncomeService').IncomeService;
class Transactions extends React.Component {
    constructor (props) {
        super(props);
        this.state = new DateRange();
        this.getIncomes = this.getIncomes.bind(this);
        this.getExpenses = this.getExpenses.bind(this);
        this.getTransactions = this.getTransactions.bind(this);
        this.deleteIncome = this.deleteIncome.bind(this);
    }

    componentDidMount() {
        this.getIncomes();
        // this.getExpenses();
    }

    getTransactions() {
        this.getIncomes();
        this.getExpenses();
    }

    getIncomes() {
        incomesLoading = true;
        incomesTotal = 0;
        incomeService.GetIncomesAsync(this.state, 'on_date', sortTypes.Descending).then(x => {
            incomes = x;
            incomesLoading = false;
            incomes.forEach(x => incomesTotal += x.amount);
            this.setState(this.state);
        });
    }

    getExpenses() {
        expensesLoading = true;
        expensesTotal = 0;
        expenseService.GetExpensesAsync(this.state, 'on_date', sortTypes.Descending).then(x => {
            expenses = x;
            expensesLoading = false;
            expenses.forEach(x => expensesTotal += x.amount);
            this.setState(this.state);
        });
    }

    deleteIncome(e, item) {
        swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                incomeService.DeleteIncomeAsync(item.objectId).then(x => {
                    incomes = incomes.filter(t => t.objectId !== item.objectId);
                    incomesTotal -= item.amount;
                    this.setState(this.state);
                    swal.fire(
                        'Deleted!',
                        'Item has been deleted.',
                        'success'
                    );
                });
            }
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
                        displayFormat={ 'DD/MM/YYYY' }
                        onClose={ () => setTimeout(() => this.getTransactions(), 100) }
                    />
                    <Summary incomes={ incomesTotal } expenses={ expensesTotal } />
                </div>

                <hr />

                <div>

                    <h3 className="text-success" >Incomes</h3>
                    { incomesLoading ? 'Loading...' : (incomes.length > 0 ? <Incomes incomes={ incomes } delete={ this.deleteIncome } /> : '- You have no incomes. 😢') }
                    <br />
                    <br />
                    <h3 className="text-danger">Expenses</h3>
                    { expensesLoading ? 'Loading...' : (expenses.length > 0 ? <Expenses expenses={ expenses } /> : '- You have no expenses! 😁') }
                </div>
            </div>
        );

    }
}

export default Transactions;