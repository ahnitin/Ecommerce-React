import { useContext } from "react";
import ProductContext from "../../store/product-store";
import CartContext from "../../store/cart-context";

const Product = () => {
  const { items } = useContext(ProductContext);
  const { addItem } = useContext(CartContext);

  return (
    <>
      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div className="col-lg-4 my-3 text-center">
                  <div className="card" style={{ width: "19rem" }}>
                    <img src={product.imgSrc} class="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <a
                        href={product.amazonLink}
                        className="btn btn-primary"
                        target="_blank"
                      >
                        BUY NOW
                      </a>
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => addItem(product)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Product;
