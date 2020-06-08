import React from 'react';
import { Fade } from 'react-reveal';
import Breadcrumb from '../../elements/Breadcrumb';

export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-item-center">
          <div className="col">
            <Breadcrumb data={breadcrumb} />
          </div>
          <div className="col-auto text-center">
            <h1 className="h2 text-gray-900">{data.title}</h1>
            <span className="text-gray-500">
              {data.city},{data.country}
            </span>
          </div>
          <div className="col" />
        </div>
      </section>
    </Fade>
  );
}
