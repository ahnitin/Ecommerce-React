import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <center>
        <h1>Error Occured</h1>
        <h3>You are Lost Somewhere Go back by Clicking on the Below Button</h3>
        <button className="btn btn-outline-success">
          <Link href="/" style={{ color: "black" }}>
            Home
          </Link>
        </button>
      </center>
    </>
  );
};
export default ErrorPage;
