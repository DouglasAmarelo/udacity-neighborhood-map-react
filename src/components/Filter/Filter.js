import React from 'react';
import './filter.css';

const Filter = ({ label, filterRestaurants }) => {
	return(
		<div className="filter card-container">
			<label
				className="card-title"
				htmlFor="filter"
				tabIndex="0"
			>
				{label}
			</label>
			<input
				className="filter-field"
				id="filter"
				type="text"
				aria-label="Filter places"
				placeholder="Filter places"
				onInput={e => filterRestaurants(e.target.value)}
			/>
		</div>
	)
}

export default Filter;