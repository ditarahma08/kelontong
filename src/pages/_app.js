import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bulma";
import { wrapper, store } from "../../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
