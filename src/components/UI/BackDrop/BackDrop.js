import classes from './BackDrop.module.css';

const BackDrop = (props) => (
  <div className={classes.Backdrop} onClick={props.clicked}></div>
);

export default BackDrop;
