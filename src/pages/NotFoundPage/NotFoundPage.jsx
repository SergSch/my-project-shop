import React from 'react';
import classes from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';

const NotFoundPage = () => {
  return (
    <div className={classes.wrap}>
      <img
        src="https://static.vecteezy.com/system/resources/previews/006/549/647/non_2x/404-landing-page-free-vector.jpg"
        alt="404"
      />
      <div className={classes.btn}>
        <Link className="link" to={'/'}>
          <Button text="Home" />
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
