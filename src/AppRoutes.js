import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import MasterLanding from './components/MasterLanding';
import FormContainer from "./components/container/FormContainer";

const AppRoutes = () => {
	return (
		<Route component={MasterLanding}>
			<Route path="/" render={() => (<h1>asdasd</h1>)}/>
		</Route>
	);
};

export default AppRoutes;
