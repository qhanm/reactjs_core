import {
	BrowserRouter,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import AuthTemplate from "./templates/AuthTemplate/AuthTemplate";
import React from "react";
import {URL_LOGIN} from "./util/constants/UrlConstnat";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<AuthTemplate exact path={ URL_LOGIN } Component={LoginPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
