import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>

      <Link to="/beers">All Beers</Link>
      <Link to="/random-beer">Random Beer</Link>
      <Link to="/new-beer">New Beer</Link>
    </div>
  );
};

export default Homepage;
