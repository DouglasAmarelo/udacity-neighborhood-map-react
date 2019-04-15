import React, { Component } from 'react';
import './sidebar.css';
import RestaurantList from '../RestaurantList/RestaurantList';
import Filter from '../Filter/Filter';

class Sidebar extends Component {
	render() {
		const content = [ 'Lorem, ipsum dolor sit amet', 'Voluptatem impedit', 'Consectetur adipisicing elit.', 'Totam eius', 'Fugiat expedita laudantium', 'Nesciunt dignissimos', 'Lorem, ipsum dolor sit amet', 'Voluptatem impedit', 'Consectetur adipisicing elit.', 'Totam eius', 'Lorem, ipsum dolor sit amet', 'Voluptatem impedit', 'Consectetur adipisicing elit.', 'Totam eius', 'Fugiat expedita laudantium', 'Nesciunt dignissimos', 'Lorem, ipsum dolor sit amet', 'Voluptatem impedit', 'Consectetur adipisicing elit.', 'Totam eius', 'Fugiat expedita laudantium', 'Lorem, ipsum dolor sit amet', 'Voluptatem impedit', 'Consectetur adipisicing elit.', 'Totam eius', 'Fugiat expedita laudantium', 'Nesciunt dignissimos', 'Lorem, ipsum dolor sit amet', 'Voluptatem impedit', 'Consectetur adipisicing elit.', 'Totam eius', 'Lorem, ipsum dolor sit amet', 'Voluptatem impedit', 'Consectetur adipisicing elit.', 'Totam eius', 'Fugiat expedita laudantium', 'Nesciunt dignissimos', 'Lorem, ipsum dolor sit amet', 'Voluptatem impedit', 'Consectetur adipisicing elit.', 'Totam eius', 'Fugiat expedita laudantium', ];

		return (
			<aside className="sidebar">
				<h1>Best restaurants in Sócrates Street</h1>
				<Filter label="Filter for an place" />
				<RestaurantList restaurants={content} />
			</aside>
		)
	}
}

export default Sidebar;