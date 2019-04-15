import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Map from './components/Map/Map';

class App extends Component {
	render() {
		return (
			<div className="App container">
				<Sidebar />
				<Map />
			</div>
		);
	}
}

export default App;
