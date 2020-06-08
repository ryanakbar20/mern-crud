import React, { Component } from 'react';
import propTypes from 'prop-types';
import InputNumber from '../../elements/Form/InputNumber';
import InputDate from '../../elements/Form/InputDate';
import Button from '../../elements/Button';
import { withRouter } from 'react-router';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',
        },
      },
    };
  }

  updateDate = (event) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();

      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );

      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  startBooking = () => {
    const { data } = this.state;
    this.props.startBooking({
      _id: this.props.itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
    this.props.history.push('/checkout');
  };

  render() {
    const { data } = this.state;
    const { itemDetails } = this.props;
    return (
      <div className="card bordered" style={{ padding: '60px 80px' }}>
        <h4 className="mb-3">Start Booking</h4>
        <h5 className="text-teal h2 mb-5">
          ${itemDetails.price}{' '}
          <span className="font-weight-light text-gray-500">
            per {itemDetails.unit}
          </span>
        </h5>
        <label htmlFor="duration">How long you wil stay ?</label>
        <InputNumber
          outerClassName="mb-4"
          isSuffixPlural
          name="duration"
          value={data.duration}
          onChange={this.updateDate}
          max={30}
          suffix=" night"
        />
        <label htmlFor="duration">Pick a date</label>
        <InputDate name="date" onChange={this.updateDate} value={data.date} />
        <h6 className="font-weight-light text-gray-500">
          You will pay{' '}
          <span className="text-gray-900 font-weight-bold">
            ${itemDetails.price * data.duration} USD
          </span>{' '}
          per{' '}
          <span className="text-gray-900 font-weight-bold">
            {data.duration} {itemDetails.unit}
          </span>
        </h6>
        <Button
          className="btn br-4 mt-3 border-radius"
          isPrimary
          isBlock
          hasShadow
          onClick={this.startBooking}
        >
          Continue to Book
        </Button>
      </div>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};

export default withRouter(BookingForm);
