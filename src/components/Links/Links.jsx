import React from 'react';
import { navRef } from './../../utils/data';
import classes from './Links.module.css';

const Links = () => {
  return (
    <div className={classes.wrap}>
      <h5>Links</h5>
      {navRef.map((elem) => (
        <a href="" key={elem.id}>
          {elem.ref}
        </a>
      ))}
    </div>
  );
};

export default Links;
