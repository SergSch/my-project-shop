import Button from '../../UI/Button/Button';
import classes from './MainTitleBlock.module.css';

const MainTitleBlock = () => {
  return (
    <div className={classes.wrap}>
      <h5 className={classes.smallTitle}>New Arrival</h5>
      <h1 className={classes.title1}>
        Discover Our <br />
        New Collection
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit
        tellus, luctus nec ullamcorper mattis.
      </p>
      <Button text="BUY NOW" color />
    </div>
  );
};
export default MainTitleBlock;
