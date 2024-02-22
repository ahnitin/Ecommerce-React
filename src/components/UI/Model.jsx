import Card from "./Card";
import styles from "./Model.module.css";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHideCart}></div>;
};
const OverlayModel = (props) => {
  return (
    <Card className={styles.model}>
      <div>{props.children}</div>
    </Card>
  );
};
const Model = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <OverlayModel>{props.children}</OverlayModel>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
export default Model;
