import React from 'react';

import RestaurantList from '../RestaurantList/RestaurantList';
import Filter from '../Filter/Filter';

import './sidebar.css';
import Message from '../Message/Message';

const Sidebar = ({ activeRestaurants, filterRestaurants, openRestaurantInfo, restaurantsError }) => {
	return (
		<aside className="sidebar">
			<h1 tabIndex="0">Best restaurants in Sócrates Street</h1>

			<Filter
				label="Filter your restaurant"
				filterRestaurants={filterRestaurants}
			/>

			{
				!restaurantsError && (
					<RestaurantList
						restaurants={activeRestaurants}
						openRestaurantInfo={openRestaurantInfo}
					/>
				)
			}

			{
				restaurantsError && (
					<Message
						type="error"
						text="
							We sorry.
							It wasn't possible load the restaurants.
							Please reload the page or try again later.
						"
					/>
				)
			}
		</aside>
	);
};

export default Sidebar;