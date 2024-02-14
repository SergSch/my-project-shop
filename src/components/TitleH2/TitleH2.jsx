import classes from './TitleH2.module.css';

const TitleH2 = ({ text, left }) => {
  return (
    <h2
      className={classes.title}
      style={{ textAlign: left ? 'left' : 'center' }}
    >
      {text}
    </h2>
  );
};
export default TitleH2;
