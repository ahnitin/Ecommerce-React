import { useContext, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import ProductContext from "../../store/product-store";
import { TbShoppingCartFilled } from "react-icons/tb";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const SearchValue = useRef();
  const { filterItem } = useContext(ProductContext);
  const { cart } = useContext(CartContext);

  const searchHandler = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      filterItem(SearchValue.current.value);
      SearchValue.current.value = "";
    }
  };
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlink:href="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link px-2 text-secondary"
                    : "nav-link px-2 text-white"
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link px-2 text-secondary"
                    : "nav-link px-2 text-white"
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                FAQs
              </a>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link px-2 text-secondary"
                    : "nav-link px-2 text-white"
                }
              >
                About
              </NavLink>
            </li>
          </ul>

          <div
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
              data-listener-added_fc2f7e0f="true"
              onKeyDown={searchHandler}
              ref={SearchValue}
            />
          </div>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-up
            </button>
            <button
              type="button"
              class="btn btn-primary position-relative"
              onClick={props.onClickCart}
            >
              <TbShoppingCartFilled />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.items.length}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
