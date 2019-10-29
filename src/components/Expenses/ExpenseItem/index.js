import React from 'react';

class ExpenseItem extends React.Component {
    constructor (props) {
        super(props);
        console.log(props);


        this.state = this.props.expense;

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <React.Fragment>
                { this.props.updateTriggeredId !== this.props.index ?
                    <tr>
                        <th>{ this.props.index + 1 }</th>
                        <td>{ new Date(this.props.expense.on_date).toDateString() }</td>
                        <td>{ this.props.expense.description }</td>
                        <td>₺{ this.props.expense.amount }</td>

                        <td>
                            <div className={ "btn-group btn-group-sm d-flex" }>
                                <button type="button" className={ "btn btn-info" } onClick={ (e) => { this.props.update(this.props.index, this.props.income); } }>Update</button>
                                <button type="button" className={ "btn btn-dark" } onClick={ () => { this.props.delete(); } }>Delete</button>
                            </div>
                        </td>
                    </tr> :

                    <tr>
                        <th>{ this.props.index + 1 }</th>
                        <td>
                            <input type="date" className={ "form-control form-control-sm" } name="date" onChange={ this.handleChange } defaultValue={ this.props.expense.on_date } />
                        </td>
                        <td>
                            <input type="text" className={ "form-control form-control-sm" } name="text" onChange={ this.handleChange } placeholder="Please write a description" defaultValue={ this.props.expense.description } />
                        </td>
                        <td>
                            <input id="yr-date" type="number" className={ "form-control form-control-sm" } name="amount" defaultValue={ this.props.expense.amount } onChange={ (e) => { if (e.target.value >= 0) this.handleChange(e); } } min="0" />
                        </td>
                        <td>
                            <div className={ "btn-group btn-group-sm d-flex" }>
                                <button type="button" className={ "btn btn-primary" } onClick={ (e) => { this.props.update(this.props.index, this.state) } } disabled={ this.state.text !== undefined && (this.state.amount <= 0 || this.state.date === '' || this.state.text.length < 3) }>Confirm</button>
                            </div>
                        </td>
                    </tr>
                }
            </React.Fragment>
        );
    }
}

export default ExpenseItem;