import React from 'react';
import Entry from './components/Entry/Entry'
import {
	HashRouter
} from "react-router-dom"

function App() {
  return (
      	<HashRouter basename = '/'>
			<Entry />
		</HashRouter>
  );
}

export default App;
