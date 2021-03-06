import React, { useRef, useState } from 'react';
import propTypes from 'prop-types';
import './index.scss';

export default function Text(props) {
  const {
    name,
    value,
    prepend,
    append,
    placeholder,
    outerClassName,
    inputClassName,
    accept,
  } = props;

  const refInputFile = useRef(null);
  const [FileName, setFileName] = useState('');

  const onChange = (event) => {
    setFileName(event.target.value);
    props.onChange({
      target: {
        name: event.target.name,
        value: event.target.files,
      },
    });
  };

  return (
    <div className={['input-text mb-3', outerClassName].join(' ')}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          ref={refInputFile}
          accept={accept}
          name={name}
          className="d-none"
          type="file"
          value={FileName}
          onChange={onChange}
        />
        <input
          className={['form-control', inputClassName].join(' ')}
          defaultValue={FileName}
          placeholder={placeholder}
          onClick={() => refInputFile.current.click()}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
}

Text.defaultProps = {
  placeholder: 'Browse a file...',
};

Text.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.string, propTypes.number]),
  append: propTypes.oneOfType([propTypes.string, propTypes.number]),
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
