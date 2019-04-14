import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App container">
				<div className="options-box">
					<h1>Find Your New NYC Home</h1>

					<div>
						<input id="show-listings" type="button" value="Show Listings" />
						<input id="hide-listings" type="button" value="Hide Listings" />
						<hr />
						<span class="text"> Draw a shape to search within it for homes!</span>
						<input id="toggle-drawing" type="button" value="Drawing Tools" />
					</div>

					<hr />

					<div>
						<input id="zoom-to-area-text" type="text" placeholder="Enter your favorite area!" />
						<input id="zoom-to-area" type="button" value="Zoom" />
					</div>

					<hr />

					<div>
						<span className="text"> Within </span>

						<select id="max-duration">
							<option value="10">10 min</option>
							<option value="15">15 min</option>
							<option value="30">30 min</option>
							<option value="60">1 hour</option>
						</select>

						<select id="mode">
							<option value="DRIVING">drive</option>
							<option value="WALKING">walk</option>
							<option value="BICYCLING">bike</option>
							<option value="TRANSIT">transit ride</option>
						</select>

						<span class="text">of</span>

						<input id="search-within-time-text" type="text" placeholder="Ex: Google Office NYC or 75 9th Ave, New York, NY" />
						<input id="search-within-time" type="button" value="Go" />
					</div>

					<hr />

					<div>
						<span className="text">Search for nearby places</span>
						<input id="places-search" type="text" placeholder="Ex: Pizza delivery in NYC" />
						<input id="go-places" type="button" value="Go" />
					</div>

				</div>

				<div id="map"></div>
			</div>
		);
	}
}

export default App;
