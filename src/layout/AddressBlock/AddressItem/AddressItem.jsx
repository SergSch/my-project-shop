import classes from './AddressItem.module.css';

const AddressItem = ({ title, firstData, img }) => {
  return (
    <div className={classes.wrap}>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <p>{firstData}</p>
      </div>
    </div>
  );
};
export default AddressItem;
