import React from 'react';
import { compose } from 'recompose';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

import MapMarker from '../MapMarker/MapMarker';

import mapStyle from '../../utils/mapStyle.json';

import './map.css';

const Map = compose(withScriptjs, withGoogleMap)(props => (
	<GoogleMap
		center={props.mapCenter}
		defaultOptions={{ styles: mapStyle }}
		defaultZoom={16}
	>
		{
			props.activeRestaurants.length > 0 && props.activeRestaurants.map(restaurant => (
				<MapMarker
					key={restaurant.id}
					restaurant={restaurant}
					restaurantInfoId={props.restaurantInfoId}
					openRestaurantInfo={props.openRestaurantInfo}
				/>
			))
		}
	</GoogleMap>
));

export default Map;
