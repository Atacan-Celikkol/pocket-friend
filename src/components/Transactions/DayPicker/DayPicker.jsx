import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import './DayPicker.scss';


export default class PFDayPicker extends React.Component {
   constructor(props) {
      super(props);
      this.handleDayClick = this.handleDayClick.bind(this);
      this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
      this.handleResetClick = this.handleResetClick.bind(this);
      this.handleWeekClick = this.handleWeekClick.bind(this);
      this.state = this.getInitialState();
   }

   getInitialState() {
      return {
         from: null,
         to: null,
         enteredTo: null, // Keep track of the last day for mouseEnter.
      };
   }

   isSelectingFirstDay(from, to, day) {
      const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
      const isRangeSelected = from && to;
      return !from || isBeforeFirstDay || isRangeSelected;
   }

   handleDayClick(day) {
      const { from, to } = this.state;
      if (from && to && day >= from && day <= to) {
         this.handleResetClick();
         return;
      }
      if (this.isSelectingFirstDay(from, to, day)) {
         this.setState({
            from: day,
            to: null,
            enteredTo: null,
         });
      } else {
         this.setState({
            to: day,
            enteredTo: day,
         });
      }
   }

   handleDayMouseEnter(day) {
      const { from, to } = this.state;
      if (!this.isSelectingFirstDay(from, to, day)) {
         this.setState({
            enteredTo: day,
         });
      }
   }

   handleResetClick() {
      this.setState(this.getInitialState());
   }

   handleWeekClick = (weekNumber, days, e) => {
      console.log(days);

      this.setState({
         from: days[0],
         to: days[6],
         enteredTo: days[6]
      });
   };

   render() {
      const { from, to, enteredTo } = this.state;
      const modifiers = { start: from, end: enteredTo };
      const disabledDays = { before: this.state.from };
      const selectedDays = [from, { from, to: enteredTo }];
      return (
         <div>
            <DayPicker
               className="Range"
               firstDayOfWeek={1}
               fromMonth={from}
               selectedDays={selectedDays}
               disabledDays={disabledDays}
               modifiers={modifiers}
               onDayClick={this.handleDayClick}
               onDayMouseEnter={this.handleDayMouseEnter}
               // todayButton={<button className='btn btn-sm btn-primary'>Go today</button>}
               showWeekNumbers
               showOutsideDays
               onWeekClick={this.handleWeekClick}
            />
            <div>
               {!from && !to && 'Please select the first day.'}
               {from && !to && 'Please select the last day.'}
               {from &&
                  to &&
                  `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
               {from && to && (
                  <button className="link" onClick={this.handleResetClick}>
                     Reset
                  </button>
               )}
            </div>
         </div>
      );
   }
}