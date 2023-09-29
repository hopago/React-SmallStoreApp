import "./footer.scss";


const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Category</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Watch</span>
          <span>Glasses</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            molestias dolore, voluptatibus consequuntur rem harum quia qui
            provident? Omnis minima commodi ullam sapiente expedita, repellendus
            nulla assumenda ex doloremque repellat.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            molestias dolore, voluptatibus consequuntur rem harum quia qui
            provident? Omnis minima commodi ullam sapiente expedita, repellendus
            nulla assumenda ex doloremque repellat.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">
            Hopago
          </span>
          <span className="copyright">
            © COPYRIGHT 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
