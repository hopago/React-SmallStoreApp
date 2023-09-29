import "./featuredCard.scss";
import { Link } from "react-router-dom";

const FeaturedCard = ({ product }) => {

  

  return (
    <Link to={`/product/${product.id}`} className="link">
      <div className="card">
        <div className="image">
          {product?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_IMG_URL + product?.attributes.img.data.attributes.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              process.env.REACT_APP_IMG_URL +
              product?.attributes.hoverImg.data.attributes.url
            }
            alt=""
            className="hoverImg"
          />
        </div>
        <h2>{product?.attributes.title}</h2>
        <div className="prices">
          <h3>
            ${" "}
            {product?.attributes.olePrice ||
              product?.attributes.price +
                Math.round(product?.attributes.price * 0.1)}
          </h3>
          <h3>$ {product?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
