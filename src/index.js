import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";

import products from "./products-mock";
import store from "./store";

import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App products={products} />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
