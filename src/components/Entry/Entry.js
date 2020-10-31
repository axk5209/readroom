import React from 'react'
import {
	Switch, Route, Redirect
} from "react-router-dom"

import LandingPage from '../LandingPage/LandingPage'
import ListPage from '../ListPage/ListPage'

const NotLoggedIn = () => {

	return (
		<Switch>
			<Route path="/home">
				<LandingPage />
			</Route>
			<Route path="/list/:category/:country">
				<ListPage />
			</Route>
			<Redirect from="/" to="/home" />
		</Switch>
	)
}

export default NotLoggedIn