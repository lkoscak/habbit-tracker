import ReactDOM from "react-dom";

import "./index.css";

import HabbitProvider from "./store/HabbitProvider";
import App from "./App";

ReactDOM.render(
	<HabbitProvider>
		<App></App>
	</HabbitProvider>,
	document.getElementById("root")
);
