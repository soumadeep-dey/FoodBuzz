import "./Order.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Order = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Deivery Information</p>
        <div className="multi-fields">
          <input type="text" name="first-name" placeholder="First Name" />
          <input type="text" name="first-name" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" name="city" placeholder="City" />
          <input type="text" name="state" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" name="zip" placeholder="Zip code" />
          <input type="text" name="country" placeholder="Country" />
        </div>
        <input type="tel" name="phone" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>Proceed To Payment</button>
        </div>
      </div>
    </form>
  );
};

export default Order;
