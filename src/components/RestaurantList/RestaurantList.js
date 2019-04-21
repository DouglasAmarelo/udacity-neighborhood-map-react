import React from 'react';

import './restaurant-list.css';

const RestaurantList = ({ restaurants, openRestaurantInfo }) => (
	<div className="card-container">
		{
			restaurants.length > 0 && (
				<h3
					className="card-title"
					tabIndex="0"
				>
					Restaurantes
					<span className="card-description">
						{restaurants.length} results
					</span>
				</h3>
			)
		}
		{
			restaurants.length > 0 && (
				<ul className="restaurants-list">
					{
						restaurants.map(restaurant => (
							<li
								className="restaurants-list__item"
								tabIndex="0"
								key={restaurant.id}
								onClick={() => openRestaurantInfo(restaurant.id)}
								onFocus={() => openRestaurantInfo(restaurant.id)}
							>
								<p>
									<strong className="restaurants-list__title">{restaurant.name}</strong>
								</p>
								<div className="restaurants-list__icon">
									<img
										src={restaurant.categories[0].icon.prefix + '32' + restaurant.categories[0].icon.suffix}
										alt={restaurant.categories[0].name}
										height="32"
										width="32"
									/>
								</div>
							</li>
						))
					}
				</ul>
			)
		}
	</div>
)

export default RestaurantList;