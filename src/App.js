import React from 'react';
import Entry from './components/Entry/Entry'
import {
	BrowserRouter as Router,
} from "react-router-dom"

function App() {
  return (
      	<Router >
			<Entry />
		</Router>
  );
}

export default App;
