import { StrictMode } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Import BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";

// Wrap the App component with the Router component to enable the router features.
// ReactDOM.render(
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<App />
		</Router>
	</StrictMode>
);
