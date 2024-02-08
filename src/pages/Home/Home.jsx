import "./Home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { HorizontalCard } from "../../components/HorizontalCard/HorizontalCard";
import { categories } from "../../backend/db/categories";
import { useProducts } from "../../contexts/productContext";

const Home = () => {
  const { productState, productDispatch, filterTypes } = useProducts();
  const { CATEGORY, CLEAR_FILTERS } = filterTypes;

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section">
        <div className="hero">
          <div className="hero-img">
            <img
              className="resp-img"
              src="https://res.cloudinary.com/dpne5x1em/image/upload/v1706634786/max-fuchs-Nm6ojlDO-5c-unsplash_wup912.jpg"
              alt="Image"
            />
          </div>

          <div className="hero-content">
            <div>
              <p className="sub-title"></p>
            </div>
          </div>
        </div>

        <div className="services-category">
          <div className="service">
            <div className="text">
              <div className="heading"></div>
              <div className="sub-heading"></div>
            </div>
          </div>

          <div className="service">
            <i className="fa-solid fa-truck-fast"></i>
            <div className="icon"></div>

            <div className="text">
              <div className="heading">Fast Delivery</div>
              <div className="sub-heading"></div>
            </div>
          </div>

          <div className="service">
            <div className="icon">
              <i className="fa fa-credit-card"></i>
            </div>

            <div className="text">
              <div className="heading">Secure Payments</div>
              <div className="sub-heading">All Cards Accepted</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { Home };
