import React from 'react';
import '../../../models/date-range';
import DateRange from '../../../models/date-range';
import './DayPicker.scss';

let endDateInput;
export default class DayPicker extends React.Component {
   constructor(props) {
      super(props);
      this.state = new DateRange();
      this.onChange = this.onChange.bind(this);
   }

   onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
      if (e.target.name === 'startDate' && this.state.endDate < e.target.value) {
         this.setState({ endDate: '' })
      }
   }

   render() {
      const startDate = this.state.startDate !== '';
      const endDate = this.state.endDate !== '';

      return (
         <div className="date-picker-container">
            <input className="btn btn-dark" type="date" name="startDate" onChange={this.onChange} value={this.state.startDate} autoFocus />
            <button className="btn btn-primary" disabled={!startDate || !endDate} onClick={() => this.props.getTransactions(this.state)}>
               {startDate && endDate && 'Ok'}
               {!startDate && !endDate && 'Select dates'}
               {startDate && !endDate && 'Select end date'}
               {!startDate && endDate && 'Select start date'}
            </button>
            <input id="endDateInput" className={this.state.endDate === '' ? "btn btn-dark border-danger" : "btn btn-dark"} type="date" name="endDate" onChange={this.onChange} min={this.state.startDate} value={this.state.endDate} />
         </div>
      );
   }
}