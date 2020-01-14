import React from 'react';
import '../../../models/date-range';
import DateRange from '../../../models/date-range';
import Loader from '../../Loader/Loader';
import './DayPicker.scss';

export default class DayPicker extends React.Component {
   constructor(props) {
      super(props);
      this.state = new DateRange();
      this.onChange = this.onChange.bind(this);
   }

   componentDidMount() {
      this.props.getTransactions(this.state);
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
            <input className={!startDate ? ' border-danger' : ''} type="date" name="startDate" onChange={this.onChange} value={this.state.startDate} />
            <button className="btn btn-primary" disabled={!startDate || !endDate || this.props.isLoading} onClick={() => this.props.getTransactions(this.state)}>
               {this.props.isLoading ? <Loader color={"#FFF"} /> :
                  startDate && endDate && 'Ok'
               }
               {!startDate && !endDate && 'Select dates'}
               {startDate && !endDate && 'Select end date'}
               {!startDate && endDate && 'Select start date'}
            </button>
            <input className={!endDate ? ' border-danger' : ''} type="date" name="endDate" onChange={this.onChange} min={this.state.startDate} value={this.state.endDate} />
         </div>
      );
   }
}