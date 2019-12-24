import React from 'react';
import './Summary.scss';

class Summary extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className={'summaries'}>
                <div id="incomes">
                    <h4>Incomes</h4>
                    <span>{this.props.incomes}TL</span>
                </div>
                <div id="expenses">
                    <h4>Expenses</h4>
                    <span>{this.props.expenses}TL</span>
                </div>
                <div id="balance">
                    <h4>Balance</h4>
                    <span>{this.props.incomes - this.props.expenses}TL</span>
                </div>
            </div>
        );

    }
}

export default Summary;