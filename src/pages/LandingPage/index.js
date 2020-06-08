import React from 'react';
import {
  Header,
  Hero,
  MostPicked,
  Category,
  Testimony,
  Footer,
} from '../../parts';

import { connect } from 'react-redux';
import { fetchPage } from '../../store/actions/page';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.title = 'Staycation | Home';
    window.scrollTo(0, 0);

    if (!this.props.page.landingPage) {
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/landing-page`,
        'landingPage'
      );
    }
  }

  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty('landingPage')) return null;
    return (
      <div>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={page.landingPage.mostPicked}
        />
        <Category data={page.landingPage.categories} />
        <Testimony data={page.landingPage.testimonial} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
