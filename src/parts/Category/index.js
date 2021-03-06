import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from '../../elements/Button';

export default function Category({ data }) {
  return data.map((category, index1) => (
    <Fade>
      <section className="container" key={`category-${index1}`}>
        <h5>{category.name}</h5>
        <div className="container-grid">
          {category.itemId.length > 0 &&
            category.itemId.map((item, index2) => (
              <div
                key={`category-${index1}-item-${index2}`}
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
                        src={`${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`}
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
                      <span className="text-gray-600">
                        {`${item.city}, ${item.country}`}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            ))}
        </div>
      </section>
    </Fade>
  ));
}
