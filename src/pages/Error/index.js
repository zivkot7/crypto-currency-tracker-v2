import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h2>404</h2>
      <p>page not found</p>
      <Link to="/">back home</Link>
    </div>
  );
};
export default Error;
