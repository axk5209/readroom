import React, {useEffect} from 'react'
import Header from './Header'
import Body from './Body'

import CssBaseline from '@material-ui/core/CssBaseline';

const MainDisplay = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<Header />
			<Body />

			
		</React.Fragment>
	)
}

export default MainDisplay