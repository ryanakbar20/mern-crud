import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from '../../elements/Button';
import IconTraveler from '../../assets/icons/ic_traveler.svg';
import IconTreasure from '../../assets/icons/ic_treasure.svg';
import IconCities from '../../assets/icons/ic_cities.svg';
import ImageHero from '../../assets/images/image_hero.png';
import FrameHero from '../../assets/images/image-hero-frame.png';

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    });
  }

  function numberFormat(number) {
    const formatNumbering = new Intl.NumberFormat('id-ID');
    return formatNumbering.format(number);
  }
  return (
    <Fade bottom delay={400}>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 500 }}>
            <h1 className="mb-3 font-weight-bold line-height-1">
              Forget Busy Work,
              <br />
              Start New Vocation
            </h1>
            <p
              className="text-gray-500 mb-5 font-weight-light w-75"
              style={{ lineHeight: '170%' }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memoriable moments
            </p>
            <Button
              onClick={showMostPicked}
              className="btn px-5 "
              isPrimary
              hasShadow
            >
              Show Me Now
            </Button>
            <div className="row mt-5">
              <div style={{ marginRight: 20 }} className="col-auto">
                <img width="36" height="36" src={IconTraveler} alt="traveler" />
                <h6 className="text-gray-900 font-weight-500 mt-3">
                  {numberFormat(props.data.travelers)}{' '}
                  <span className="text-gray-500 font-weight-light">
                    travelers
                  </span>
                </h6>
              </div>
              <div style={{ marginRight: 20 }} className="col-auto">
                <img width="36" height="36" src={IconTreasure} alt="traveler" />
                <h6 className="text-gray-900 font-weight-500 mt-3">
                  {numberFormat(props.data.treasures)}{' '}
                  <span className="text-gray-500 font-weight-light">
                    treasure
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img width="36" height="36" src={IconCities} alt="traveler" />
                <h6 className="text-gray-900 font-weight-500 mt-3">
                  {numberFormat(props.data.cities)}{' '}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImageHero}
                alt="hero"
                className="img-fluid position-absolute"
                style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}
              />
              <img
                src={FrameHero}
                alt="frame"
                className="img-fluid position-absolute"
                style={{ margin: '0 -15 -15 0' }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
