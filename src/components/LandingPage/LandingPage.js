import React from 'react'
import Header from './Header'
import Body from './Body'
import CssBaseline from '@material-ui/core/CssBaseline'

/**
 * LandingPage
 * Uses Helper Components to render the header and user news query options.
 */

const LandingPage = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<Header />
			<Body />

			
		</React.Fragment>
	)
}

export default LandingPage