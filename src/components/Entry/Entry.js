import React from 'react'
import {
	Switch, Route, Redirect
} from "react-router-dom"

import LandingPage from '../LandingPage/LandingPage'

const NotLoggedIn = () => {

	return (
		<Switch>
			<Route path="/home">
				<LandingPage />
			</Route>
			<Redirect from="/" to="/home" />
		</Switch>
	)
}

export default NotLoggedIn