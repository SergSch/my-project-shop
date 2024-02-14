import React from 'react';
import classes from './HelpBlock.module.css';

const HelpBlock = () => {
  return (
    <div className={classes.wrap}>
      <h5>Help</h5>
      <a href="">Payment Options</a>
      <a href="">Returns</a>
      <a href="">Privacy Policies</a>
    </div>
  );
};

export default HelpBlock;
