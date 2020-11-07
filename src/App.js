import React from 'react'
import Entry from './components/Entry/Entry'
import {
	HashRouter
} from "react-router-dom"

/**
 * App
 * Creates HashRouter to allow hosting on GitHub and renders Entry.
 */

function App() {
  return (
      	<HashRouter basename = '/'>
			<Entry />
		</HashRouter>
  )
}

export default App
