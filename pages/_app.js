import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
