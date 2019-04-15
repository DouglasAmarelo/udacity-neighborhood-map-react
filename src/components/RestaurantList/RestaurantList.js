import React from 'react';
import './restaurant-list.css';

const RestaurantList = ({ restaurants }) => (
	<div className="card-container">
		{
			restaurants.length > 0 && ( <h3 className="card-title">Restaurantes</h3> )
		}
		{
			restaurants.length > 0 && (
				<ul className="restaurants-list">
					{
						restaurants.map((restaurant, index) => (
							<li className="restaurants-list__item" key={index}>{restaurant}</li>
						))
					}
				</ul>
			)
		}
	</div>
)

export default RestaurantList;