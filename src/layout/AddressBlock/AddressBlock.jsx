import classes from './AddressBlock.module.css';
import { contact } from './../../utils/data';
import AddressItem from './AddressItem/AddressItem';

const AddressBlock = () => {
  return (
    <div className={classes.wrap}>
      {contact.map((elem) => (
        <AddressItem key={elem.id} {...elem} />
      ))}
    </div>
  );
};
export default AddressBlock;
