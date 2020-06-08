import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from '../../elements/Button';

export default function Activities({ data }) {
  if (data.length < 1) return null;
  return (
    <Fade>
      <section className="container">
        <h5>Activity</h5>
        <div className="container-grid">
          {data.map((item, index2) => {
            return (
              <div
                key={`activity-item-${index2}`}
                className="item column-3 row-1"
              >
                <Fade bottom delay={300 * index2}>
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular{' '}
                        <span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper">
                      <img
                        src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                        alt={item.name}
                        className="img-cover category"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        href={`/properties/${item._id}`}
                        className="stretched-link d-block font-weight-medium link-streched"
                      >
                        <h6 className="text-gray-900">{item.name}</h6>
                      </Button>
                      <span className="text-gray-600">{`${item.type}`}</span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </section>
    </Fade>
  );
}
