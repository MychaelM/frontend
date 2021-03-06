import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";


class DateTimeForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.setItem({
      ...this.props.item,
      timer: this.state.startDate
    });
    console.log("setItem", this.props.item)
    console.log(this.state.startDate)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={20}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          <button className="btn btn-primary">Show Date</button>
        </div>
      </form>
    );
  }

}

export default DateTimeForm;