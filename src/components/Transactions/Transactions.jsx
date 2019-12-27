import React from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import DateRange from '../../models/date-range';
import { getApiUrl, sortTypes } from '../../services/ApiService';
import * as incomeService from '../../services/IncomeService';
import Expenses from '../Expenses/index';
import Incomes from '../Incomes/index';
import Summary from './Summary/Summary';
import './Transactions.scss';


let incomes = [];
let expenses = [];
let incomesTotal = 0;
let expensesTotal = 0;
// let incomeService = require('../../services/IncomeService').IncomeService;
class Transactions extends React.Component {
    constructor(props) {
        super(props)
        this.state = new DateRange();
        this.getTransactions = this.getTransactions.bind(this);
        incomeService.getIncomesAsync(this.state, 'on_date', sortTypes.Descending);
    }

    componentDidMount() {
        // this.getTransactions();
    }

    getTransactions() {
        incomesTotal = 0;
        expensesTotal = 0;
        fetch(getApiUrl('incomes', this.state, 'on_date', sortTypes.Descending))
            .then(res => res.json())
            .then((data) => {
                incomes = data;
                incomes.forEach(x => incomesTotal += x.amount);
                this.setState(this.state);
            })
            .catch(console.log)

        fetch(getApiUrl('expenses', this.state, 'on_date', sortTypes.Descending))
            .then(res => res.json())
            .then((data) => {
                expenses = data;
                expenses.forEach(x => expensesTotal += x.amount);
                this.setState(this.state);
            })
            .catch(console.log)
    }


    render() {
        return (
            <div>
                <div className={'summary-container'}>
                    <DateRangePicker
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDateId="start-date-input" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="end-date-input" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        isOutsideRange={() => false}
                        renderCalendarInfo={() => false}
                        small={false}
                        withPortal={true}
                        noBorder={true}
                        block={true}
                        readOnly={true}
                        hideKeyboardShortcutsPanel={true}
                        numberOfMonths={1}
                        firstDayOfWeek={1}
                        displayFormat={'DD/MM/YYYY'}
                        onClose={() => setTimeout(() => this.getTransactions(), 100)}
                    />
                    <Summary incomes={incomesTotal} expenses={expensesTotal} />
                </div>

                <hr />

                <div>
                    <Incomes incomes={incomes} />
                    <br />
                    <Expenses expenses={expenses} />
                </div>
            </div>
        );

    }
}

export default Transactions;