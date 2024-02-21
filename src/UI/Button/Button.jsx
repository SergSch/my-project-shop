import classes from './Button.module.css';

const Button = ({ text, color, handleClick }) => {
  return (
    <button
      className={classes.btn}
      style={{
        backgroundColor: color ? '#b88e2f' : 'white',
        color: color ? 'white' : 'black',
        border: color ? 'none' : '1px solid #b88e2f',
      }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
export default Button;
