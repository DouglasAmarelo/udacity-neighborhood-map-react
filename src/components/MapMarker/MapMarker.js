import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

import mapIcon from '../../images/map-marker-35x35.png';
import mapIconActive from '../../images/map-marker-active-35x35.png';

import './map-marker.css';

const MapMarker = ({ restaurant, restaurantInfoId, openRestaurantInfo }) => (
	<Marker
		icon={{ url: restaurantInfoId === restaurant.id ? mapIconActive : mapIcon }}
		key={restaurant.id}
		position={{
			lat: restaurant.location.lat,
			lng: restaurant.location.lng
		}}
		onClick={() => openRestaurantInfo(restaurant.id)}
	>
		{restaurantInfoId === restaurant.id && (
			<InfoWindow
				key={restaurant.id}
				options={{ maxWidth: 350 }}
				onCloseClick={() => openRestaurantInfo(restaurant.id)}
			>
				<article className="map-marker-info" tabIndex="0">
					<div className="map-marker-info__category">
						<img
							className="map-marker-info__category-image"
							src={restaurant.categories[0].icon.prefix + '32' + restaurant.categories[0].icon.suffix}
							alt={restaurant.categories[0].name}
							height="32"
							width="32"
						/>
						{restaurant.categories[0].name}
					</div>

					<a
						className="map-marker-info__name"
						href={`https://foursquare.com/v/${restaurant.id}`}
						title={restaurant.name}
						target="_blank"
						rel="noopener noreferrer"
					>
						<strong>{restaurant.name}</strong>
					</a>

					<div className="map-marker-info__address">
						<p><strong>Address: </strong>{restaurant.location.formattedAddress[0]}</p>
						<p><strong>City: </strong>{restaurant.location.formattedAddress[1]}</p>
						<p><strong>Postal code: </strong>{restaurant.location.formattedAddress[2]}</p>
					</div>
				</article>
			</InfoWindow>
		)}
	</Marker>
);

export default MapMarker;


