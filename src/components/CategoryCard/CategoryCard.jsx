import classes from './CategoryCard.module.css';

const CategoryCard = ({ img, name }) => {
  return (
    <div className={classes.wrap}>
      <img src={img} alt={name} className={classes.img} />
      <h4 className={classes.title}>{name}</h4>
    </div>
  );
};
export default CategoryCard;
