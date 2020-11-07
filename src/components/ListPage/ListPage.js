import React from 'react'
import Header from './Header'
import Body from './Body'
import CssBaseline from '@material-ui/core/CssBaseline'

/**
 * LandingPage
 * Uses Helper Components to render paginated list of formatted article data relevant to user query.
 */

const ListPage = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<Header />
			<Body />

			
		</React.Fragment>
	)
}

export default ListPage