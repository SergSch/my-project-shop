import Button from '../../UI/Button/Button';
import classes from './SingleProduct.module.css';
import shareIcon from '../../assets/images/productShare/share.svg';
import compareIcon from '../../assets/images/productShare/compare.svg';
import heartIcon from '../../assets/images/productShare/heart.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SingleProduct = ({ title, description, price, thumbnail }) => {
  return (
    <div className={classes.wrap}>
      <div className={classes.img}>
        <img src={thumbnail} alt={title} />
      </div>
      <div className={classes.addBtn}>
        <Button text="Add to cart" />
        <div className={classes.share}>
          <Link className={classes.link}>
            <img src={shareIcon} alt="share" />
            <p>Share</p>
          </Link>
          <Link className={classes.link}>
            <img src={compareIcon} alt="compare" />
            <p>Compare</p>
          </Link>
          <Link className={classes.link}>
            <img src={heartIcon} alt="like" />
            <p>Like</p>
          </Link>
        </div>
      </div>
      <div className={classes.bottomBlock}>
        <h3>{title}</h3>
        <p>{description}</p>
        <h3>Rp {price}$</h3>
      </div>
    </div>
  );
};
export default SingleProduct;
