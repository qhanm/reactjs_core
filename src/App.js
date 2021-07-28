import {BrowserRouter, Switch, useHistory} from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import AuthTemplate from "./templates/AuthTemplate/AuthTemplate";
import React, {useEffect} from "react";
import {URL_DASHBOARD, URL_LOGIN, URL_SETTING} from "./util/constants/UrlConstnat";
import DashboardTemplate from "./templates/DashboardTemplate/DashboardTemplate";
import LoadingComponent from "./components/Global/Loading/LoadingComponent";
import {useDispatch} from "react-redux";
import {ADD_HISTORY} from "./redux/actions/HistoryAction";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import SettingPage from "./pages/Setting/SettingPage";

function App() {

	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({
			type: ADD_HISTORY,
			history
		})
	}, [])

	return (
		<>
			<LoadingComponent />
			<Switch>
				<AuthTemplate exact path={ URL_LOGIN } Component={LoginPage} />
				<DashboardTemplate exact path={ URL_DASHBOARD } Component={DashboardPage} />
				<DashboardTemplate exact path={ URL_SETTING } Component={SettingPage} />
			</Switch>
		</>
	);
}

export default App;
