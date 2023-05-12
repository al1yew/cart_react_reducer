import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { UseGlobalContext } from "./context";

function App() {
    const { state } = UseGlobalContext();

    return (
        <main>
            {state.loading ? (
                <div className="loading" style={{ marginTop: "10rem" }}></div>
            ) : (
                <>
                    <Navbar />
                    <CartContainer />
                </>
            )}
        </main>
    );
}

export default App;
