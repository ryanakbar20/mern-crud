import React, { Component } from 'react';
import {
  Header,
  Testimony,
  Footer,
  PageDetailDesc,
  PageDetailHero,
  PageDetailTitle,
  BookingForm,
  Activities,
} from '../../parts';
import { connect } from 'react-redux';
import { checkoutBooking } from '../../store/actions/checkout';
import { fetchPage } from '../../store/actions/page';

class DetailsPage extends Component {
  componentDidMount() {
    window.title = 'Staycation | Details';
    window.scrollTo(0, 0);

    if (!this.props.page[this.props.match.params.id]) {
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/detail-page/${this.props.match.params.id}`,
        `${this.props.match.params.id}`
      );
      console.log(this.props);
    }
  }

  render() {
    const listBreadcrumb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Details', pageHref: '' },
    ];

    console.log(this.props);
    if (!this.props.page[this.props.match.params.id]) return null;

    const { page, match } = this.props;

    return (
      <div>
        <Header {...this.props} />
        <PageDetailTitle
          data={page[match.params.id]}
          breadcrumb={listBreadcrumb}
        />
        <PageDetailHero data={page[match.params.id].imageId} />
        <section className="container">
          <div className="row">
            <div className="col-7">
              <PageDetailDesc
                data={page[match.params.id].description}
                features={page[match.params.id].featureId}
              />
            </div>
            <div className="col">
              <BookingForm
                itemDetails={page[match.params.id]}
                startBooking={this.props.checkoutBooking}
              />
            </div>
          </div>
        </section>
        <Activities data={page[match.params.id].activityId} />
        <Testimony data={page[match.params.id].testimonial} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
