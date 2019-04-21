import React from 'react';

import RestaurantList from '../RestaurantList/RestaurantList';
import Filter from '../Filter/Filter';

import './sidebar.css';

const Sidebar = ({ activeRestaurants, filterRestaurants, openRestaurantInfo }) => {
	return (
		<aside className="sidebar">
			<h1 tabIndex="0">Best restaurants in Sócrates Street</h1>

			<Filter
				label="Filter your restaurant"
				filterRestaurants={filterRestaurants}
			/>

			<RestaurantList
				restaurants={activeRestaurants}
				openRestaurantInfo={openRestaurantInfo}
			/>
		</aside>
	)
}

export default Sidebar;