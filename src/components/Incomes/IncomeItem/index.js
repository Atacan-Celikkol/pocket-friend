import React from 'react';
import './index.scss';

class IncomeItem extends React.Component {
    constructor(props) {
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
    };

    changeShowUpdate() {
        this.setState({ showUpdate: !this.state.showUpdate });
    }

    render() {
        return this.state.showUpdate ?
            <UpdateRow parentProps={this.props} parentState={this.state} handleChange={(e) => this.handleChange(e)} show={() => this.changeShowUpdate()}></UpdateRow>
            :
            <ViewRow parentProps={this.props} show={() => this.changeShowUpdate()}></ViewRow>;
    }
}

export default IncomeItem;


function ViewRow(props) {
    return (
        <div>
            <div className={'income-item'}>
                <div className={'income-item-header'}>
                    <h5>{new Date(props.parentProps.income.on_date).toDateString()}</h5>
                    {/* <div>
                        <img src={require('../../../assets/edit.svg')} onClick={() => { props.show(); }} />
                        <img src={require('../../../assets/delete.svg')} onClick={() => { props.parentProps.delete(); }} />
                    </div> */}
                </div>
                <div className={'income-item-body'}>
                    <span>{props.parentProps.income.description}</span>
                    <div id="right-side">
                        <b>{props.parentProps.income.amount}TL</b>
                        <div id="action-buttons-container">
                            <button id="update-btn"></button>
                            <button id="delete-btn"></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div>
                <div className={ "btn-group btn-group-sm d-flex" }>
                    <img height={ '24px' } src={ require('../../../assets/edit.svg') } onClick={ () => { props.show(); } } />
                    <img height={ '24px' } src={ require('../../../assets/delete.svg') } onClick={ () => { props.parentProps.delete(); } } />
                </div>
            </div> */}
        </div>
    );
}

function UpdateRow(props) {
    return (
        <tr>
            <th>{props.parentProps.index + 1}</th>
            <td>
                <input type="date" className={"form-control form-control-sm"} name="on_date" onChange={props.handleChange} defaultValue={props.parentProps.income.on_date} />
            </td>
            <td>
                <input type="text" className={"form-control form-control-sm"} name="description" onChange={props.handleChange} placeholder="Please write a description" defaultValue={props.parentProps.income.description} />
            </td>
            <td>
                <input type="number" className={"form-control form-control-sm"} name="amount" defaultValue={props.parentProps.income.amount} onChange={(e) => { if (e.target.value >= 0) props.handleChange(e); }} min="0" />
            </td>
            <td>
                <div className={"btn-group btn-group-sm d-flex"}>
                    <button type="button" className={"btn btn-primary"} onClick={(e) => { props.parentProps.update(props.parentState.income); props.show(); }} disabled={props.parentState.text !== undefined && (props.parentState.amount <= 0 || props.parentState.date === '' || props.parentState.text.length < 3)}>Confirm</button>
                </div>
            </td>
        </tr>
    );
}