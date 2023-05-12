import {
    createContext,
    useEffect,
    useState,
    useContext,
    useReducer,
} from "react";
import reducer from "./reducer";
import cartItems from "./data";
import { getTotals } from "./utils";
import axios from "axios";
import { DISPLAY_ITEMS, LOADING } from "./actions";

const url = "https://www.course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

const defaultState = {
    loading: false,
    cart: new Map(),
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const { totalAmount, totalCost } = getTotals(state.cart);

    useEffect(() => {
        dispatch({ type: LOADING });
        const axiosData = async () => {
            const response = await axios.get(url);

            if (response.status === 200) {
                dispatch({
                    type: DISPLAY_ITEMS,
                    payload: { cart: response.data },
                });
            }
        };

        axiosData();
    }, []);

    return (
        <AppContext.Provider
            value={{ state, dispatch, totalAmount, totalCost }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const UseGlobalContext = () => useContext(AppContext);
