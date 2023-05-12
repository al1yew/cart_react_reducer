import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { UseGlobalContext } from "./context";
import { DECREASE, INCREASE, REMOVE } from "./actions";

const CartItem = ({ id, img, title, price, amount }) => {
    const { dispatch } = UseGlobalContext();

    return (
        <article className="cart-item">
            <img src={img} alt={title} />
            <div>
                <h5>{title}</h5>
                <span className="item-price">${price}</span>
                <button
                    className="remove-btn"
                    onClick={() => dispatch({ type: REMOVE, payload: { id } })}
                >
                    remove
                </button>
            </div>
            <div>
                <button
                    className="amount-btn"
                    onClick={() =>
                        dispatch({ type: INCREASE, payload: { id } })
                    }
                >
                    <FaChevronUp className="amount-icon" />
                </button>
                <span className="amount">{amount}</span>
                <button
                    className="amount-btn"
                    onClick={() =>
                        dispatch({ type: DECREASE, payload: { id } })
                    }
                >
                    <FaChevronDown className="amount-icon" />
                </button>
            </div>
        </article>
    );
};

export default CartItem;
