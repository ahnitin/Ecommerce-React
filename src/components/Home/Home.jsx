import classes from "./Home.module.css";
const Home = () => {
  return (
    <>
      <center>
        <h1 className={classes.heading}>Welcome To Hacker's Mart</h1>
        <h4 style={{ marginTop: "245px" }}>
          Here you are going to get products with ultimate Pro level Discounts
        </h4>
      </center>
    </>
  );
};
export default Home;
