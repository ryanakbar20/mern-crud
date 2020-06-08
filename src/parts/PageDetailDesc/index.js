import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function PageDetailDesc({ data, features }) {
  return (
    <div>
      <main>
        <h4>About The Place</h4>
        {ReactHtmlParser(data)}
      </main>
      <div className="row" style={{ marginTop: 30 }}>
        {features.map((item, index) => (
          <div className="col-3 mb-5" key={index}>
            <img
              className="d-block mb-1"
              src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
              alt={item.name}
              width="38"
              height="38"
            />
            <span>{item.qty}</span>{' '}
            <span className="font-weight-light text-gray-500">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
