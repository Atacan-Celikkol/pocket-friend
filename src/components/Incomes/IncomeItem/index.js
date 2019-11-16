import React from 'react';

class IncomeItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            income: this.props.income,
            showUpdate: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        const { target: { name, value } } = e;
        const income = this.state.income;
        income[name] = name === 'amount' ? parseFloat(value) : value;
        this.setState({ income: income });
    }

    changeShowUpdate() {
        this.setState({ showUpdate: !this.state.showUpdate })
    }

    render() {
        return this.state.showUpdate ?
            <UpdateRow parentProps={ this.props } parentState={ this.state } handleChange={ (e) => this.handleChange(e) } show={ () => this.changeShowUpdate() }></UpdateRow>
            :
            <ViewRow parentProps={ this.props } show={ () => this.changeShowUpdate() }></ViewRow>
    }
}

export default IncomeItem;


function ViewRow(props) {
    return (
        <tr>
            <th>{ props.parentProps.index + 1 }</th>
            <td>{ new Date(props.parentProps.income.on_date).toDateString() }</td>
            <td>{ props.parentProps.income.description }</td>
            <td>₺{ props.parentProps.income.amount }</td>

            <td>
                <div className={ "btn-group btn-group-sm d-flex" }>
                    <button type="button" className={ "btn btn-info" } onClick={ () => { props.show() } }>Update</button>
                    <button type="button" className={ "btn btn-dark" } onClick={ () => { props.parentProps.delete(); } }>Delete</button>
                </div>
            </td>
        </tr>
    );
}

function UpdateRow(props) {
    return (
        <tr>
            <th>{ props.parentProps.index + 1 }</th>
            <td>
                <input type="date" className={ "form-control form-control-sm" } name="on_date" onChange={ props.handleChange } defaultValue={ props.parentProps.income.on_date } />
            </td>
            <td>
                <input type="text" className={ "form-control form-control-sm" } name="description" onChange={ props.handleChange } placeholder="Please write a description" defaultValue={ props.parentProps.income.description } />
            </td>
            <td>
                <input type="number" className={ "form-control form-control-sm" } name="amount" defaultValue={ props.parentProps.income.amount } onChange={ (e) => { if (e.target.value >= 0) props.handleChange(e); } } min="0" />
            </td>
            <td>
                <div className={ "btn-group btn-group-sm d-flex" }>
                    <button type="button" className={ "btn btn-primary" } onClick={ (e) => { props.parentProps.update(props.parentState.income); props.show() } } disabled={ props.parentState.text !== undefined && (props.parentState.amount <= 0 || props.parentState.date === '' || props.parentState.text.length < 3) }>Confirm</button>
                </div>
            </td>
        </tr>
    );
}