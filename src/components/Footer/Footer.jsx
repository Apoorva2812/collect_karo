import "./Footer.css";
import { Link } from "react-router-dom";
import { useProducts } from "../../contexts/productContext";

const Footer = () => {
  const { showFilter } = useProducts();

  return (
    <footer className={`${showFilter ? "hide-div" : null}`}>
      <div className="about">
        <Link to="/" className="nav-brand"></Link>

        <div className="text"></div>

        <div className="social">
          <a href="https://github.com/himadri2110" target="_blank"></a>
          <a href="https://twitter.com/himadri2110" target="_blank"></a>
          <a href="https://linkedin.com/in/himadri2110" target="_blank"></a>
        </div>
      </div>

      <div className="help desk">
        <div className="heading">Help Desk</div>
        <div className="sub-heading">
          <Link to="/products">Customer Complaints</Link>
        </div>
        <div className="sub-heading">
          <Link to="/wishlist">Contact no.</Link>
        </div>
        <div className="sub-heading">
          <Link to="/cart">Other Issues</Link>
        </div>
      </div>

      <div className="contact">
        <div className="heading">Contact Us</div>

        <div className="sub-heading address">
          <i className="fa fa-map-marker"></i>Matunga,Mumbai
        </div>
        <div className="sub-heading phone">
          <i className="fa fa-phone"></i>+91 9751111111
        </div>
        <div className="sub-heading e-mail">
          <i className="fa fa-envelope"></i>support@collectkaro.com
        </div>
      </div>
    </footer>
  );
};

export { Footer };
