import CartItem from "./CartItem";
import { CLEAR_CART } from "./actions";
import { UseGlobalContext } from "./context";

const CartContainer = () => {
    const { state, dispatch, totalCost } = UseGlobalContext();

    const cartArray = Array.from(state.cart.entries());

    if (cartArray.length === 0) {
        return (
            <section className="cart">
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        );
    }
    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartArray.map((cartItem) => {
                    const [id, item] = cartItem;

                    return <CartItem key={id} {...item} />;
                })}
            </div>
            <footer>
                <hr />
                <div>
                    <h5 className="cart-total">
                        total <span>${totalCost.toFixed(2)}</span>
                    </h5>
                </div>
                <button
                    className="btn btn-hipster"
                    onClick={() => dispatch({ type: CLEAR_CART })}
                >
                    clear cart
                </button>
            </footer>
        </section>
    );
};

export default CartContainer;
