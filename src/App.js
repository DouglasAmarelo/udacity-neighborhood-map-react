import React, { Component } from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import Map from './components/Map/Map';

import keys from './utils/keys.json';

import './App.css';
import Message from './components/Message/Message';

const GOOGLE_MAPS_API_KEY = keys[0].googleMaps;
const GOOGLE_MAPS_API_URL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3`;

class App extends Component {
	state = {
		activeRestaurants: [],
		restaurants: [],
		mapCenter: {
			lat: -23.6584523,
			lng: -46.6918614
		},
		searchQuery: '',
		restaurantInfoId: '',
		mapError: false,
		restaurantsError: false
	};

	componentDidMount() {
		this.getForSquareRestaurants();

		window.gm_authFailure = () => {
			this.setState({ mapError: true });
		};
	};

	static getDerivedStateFromError(error) {
		return { mapError: true };
	};

	getForSquareRestaurants = () => {
		const requestConfig = {
			clientId: keys[0].foursquare.clientID,
			clientSecret: keys[0].foursquare.clientSecret,
			mapCenter: '-23.6584523, -46.6918614',
			section: 'food',
			query: 'restaurant',
			limit: '20',
			version: 20190416
		};

		fetch(`
			https://api.foursquare.com/v2/venues/explore
			?client_id=${requestConfig.clientId}
			&client_secret=${requestConfig.clientSecret}
			&ll=${requestConfig.mapCenter}
			&section=${requestConfig.section}
			&query=${requestConfig.query}
			&limit=${requestConfig.limit}
			&v=${requestConfig.version}
		`)
		.then(res => res.json())
		.then(data => {
			const restaurantsData = data.response.groups['0'].items;
			const restaurants = restaurantsData.map(item => item.venue);

			this.setState({
				restaurants: restaurants,
				activeRestaurants: restaurants,
				mapError: false
			});

			return restaurants;
		})
		.catch(err => {
			this.setState({ restaurantsError: true });
			console.log("@@@ Error: ", err);
		});
	};

	filterRestaurants = (searchTerm) => {
		const { restaurants } = this.state;
		let activeRestaurants = restaurants;

		if (searchTerm) {
			const regex = new RegExp(searchTerm, 'gmi');
			activeRestaurants = restaurants.filter(restaurant => regex.test(restaurant.name));
		}

		this.setState({
			activeRestaurants,
			searchTerm: searchTerm.trim(),
		});
	};

	openRestaurantInfo = (restaurantId) => {
		this.setState({ restaurantInfoId: restaurantId });
	};

	render() {
		const {
			activeRestaurants,
			restaurants,
			restaurantInfoId,
			mapCenter,
			mapError,
			restaurantsError
		} = this.state;

		return (
			<div className="App container">
				<Sidebar
					activeRestaurants={activeRestaurants}
					filterRestaurants={this.filterRestaurants}
					openRestaurantInfo={this.openRestaurantInfo}
					restaurantsError={restaurantsError}
				/>

				{
					!mapError && (
						<Map
							activeRestaurants={activeRestaurants}
							restaurants={restaurants}
							restaurantInfoId={restaurantInfoId}
							mapCenter={mapCenter}
							openRestaurantInfo={this.openRestaurantInfo}
							googleMapURL={GOOGLE_MAPS_API_URL}
							loadingElement={
								<Message
									type="loading"
									text="Loading..."
								/>
							}
							containerElement={
								<div
									id="map"
									className="map"
									role="application"
									tabIndex="0"
								>
								</div>
							}
							mapElement={
								<div style={{ height: `100%` }}></div>
							}
						/>
					)
				}

				{
					mapError && (
						<Message
							type="error"
							text="
								We're sorry, we had a problem.
								Please reload the page or try again later.
							"
						/>
					)
				}
			</div>
		);
	};
};

export default App;

