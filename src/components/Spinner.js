import React, { Fragment } from 'react';
import spinner from './spinner.svg';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='loading...'
      style={{
        width: '40px',
        margin: 'auto',
        display: 'block',
      }}
    />
  </Fragment>
);

export default Spinner;
