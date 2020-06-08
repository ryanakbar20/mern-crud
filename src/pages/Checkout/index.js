import React, { Component } from 'react';
import { Header } from '../../parts';
import Stepper, {
  Controller,
  MainContent,
  Metta,
  Numbering,
} from '../../elements/Stepper';
import { BookingInformation, Payment, Completed } from '../../parts/Checkout';
import Button from '../../elements/Button';
import itemDetails from '../../json/itemDetails.json';
import Fade from 'react-reveal';
import { connect } from 'react-redux';
import { submitBooking } from '../../store/actions/checkout';

class Checkout extends Component {
  state = {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      proofPayment: '',
      bankName: '',
      bankHolder: '',
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  _Submit = (nextStep) => {
    const { data } = this.state;
    const { checkout } = this.props;

    const payload = new FormData();
    payload.append('firstName', data.firstName);
    payload.append('lastName', data.lastName);
    payload.append('email', data.email);
    payload.append('phoneNumber', data.phone);
    payload.append('idItem', checkout._id);
    payload.append('duration', checkout.duration);
    payload.append('bookingStartDate', checkout.date.startDate);
    payload.append('bookingEndDate', checkout.date.endDate);
    payload.append('accountHolder', data.bankHolder);
    payload.append('bankFrom', data.bankName);
    payload.append('image', data.proofPayment[0]);

    this.props.submitBooking(payload).then(() => {
      nextStep();
    });
  };

  render() {
    const { data } = this.state;
    const { checkout, page } = this.props;
    console.log(data);
    if (!checkout) {
      return (
        <div className="container">
          <div className="row text-center align-items-center justify-content-center">
            <div className="col-3">
              PILIH KAMAR DULU
              <div>
                <Button className="btn" isPrimary type="link" href="/">
                  BACK
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    const steps = {
      bookingInformation: {
        title: 'Booking Information',
        description: 'Please fill the blank fields below',
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            itemDetails={page[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: 'Payment',
        description: 'Kindly follow the instruction below',
        content: (
          <Payment
            data={data}
            checkout={checkout}
            itemDetails={page[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: 'Yay! Completed',
        description: null,
        content: <Completed />,
      },
    };
    return (
      <div>
        <Header isCentered />
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={CurrentStep}
                style={{ marginBottom: 50 }}
              />

              <Metta data={steps} current={CurrentStep} />
              <MainContent data={steps} current={CurrentStep} />
              {CurrentStep === 'bookingInformation' && (
                <Controller>
                  {data.firstName !== '' &&
                    data.lastName !== '' &&
                    data.email !== '' &&
                    data.phone !== '' && (
                      <Fade>
                        <Button
                          isPrimary
                          isBlock
                          hasShadow
                          className="btn mb-3"
                          type="button"
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    isBlock
                    isLight
                    className="btn"
                    type="link"
                    href={`/properties/:${itemDetails._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === 'payment' && (
                <Controller>
                  {data.proofPayment !== '' &&
                    data.bankName !== '' &&
                    data.bankHolder !== '' && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={() => this._Submit(nextStep)}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="button"
                    isBlock
                    isLight
                    onClick={prevStep}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === 'completed' && (
                <Controller>
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    href="/"
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    checkout: state.checkout,
    page: state.page,
  };
};

export default connect(mapStateToProps, { submitBooking })(Checkout);
