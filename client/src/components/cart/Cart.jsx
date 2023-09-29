import { DeleteOutline } from '@mui/icons-material';
import './cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { baseReq } from '../../requestMethods';
import { loadStripe } from '@stripe/stripe-js';


const Cart = () => {

    const products = useSelector(state => state.cart.products);

    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach(item => total += item.quantity * item.price);
        return Math.round(total);
    };

    const stripePromise = loadStripe('pk_test_51NZnPUFe1QcTvj82V2w3HwQHWPR8XlTHME92eNggKMgD8I3Jk61jNyqWYMPdLB7SboJgmvfx8xmKGGk9kWTKFkk200oRyFr5ha');

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await baseReq.post("/orders", {
                products,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            });
        } catch (err) {
            console.log(err);
        }
    };

  return (
    <div className="cart">
        {products.map(item => (
            <div className="item" key={item.id}>
                <img src={process.env.REACT_APP_IMG_URL + item.img} alt="" className='cartImg' />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0, 50)}</p>
                    <div className="price">
                    $ {item.quantity} X {item.price}
                    </div>
                </div>
                <DeleteOutline onClick={() => dispatch(removeItem(item.id))} className='cartDelete' />
            </div>
        ))}
        <div className="total">
            <span>SubTotal</span>
            <span>$ {totalPrice()}</span>
        </div>
        <div className="cartButton">
          <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        </div>
        <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart
