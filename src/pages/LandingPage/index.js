import React from 'react';
import landingPage from '../../json/landingPage.json';
import {
  Header,
  Hero,
  MostPicked,
  Category,
  Testimony,
  Footer,
} from '../../parts';
import InputText from '../../elements/Form/InputText';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <div>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Category data={landingPage.categories} />
        <Testimony data={landingPage.testimonial} />
        <Footer />
      </div>
    );
  }
}
