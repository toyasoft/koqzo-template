import "../../public/styles.css";
import { ReactRelayContext } from "react-relay";
import { useEnvironment } from "../lib/relay";
import { useState } from "react";
// import { ScrollbarContext, ParamsContext } from "../lib/context";

export default function App({ Component, pageProps }) {
  const environment = useEnvironment(pageProps.initialRecords);
  // const [params, setParams] = useState({
  //   page: 0,
  //   count: 0,
  //   keyword: "",
  //   order: "",
  //   display: [],
  // });
  // const [isScrollbar, setScrollbar] = useState(true);

  return (
    <ReactRelayContext.Provider value={{ environment, variables: {} }}>

          <Component {...pageProps} />

    </ReactRelayContext.Provider>
  );
}
