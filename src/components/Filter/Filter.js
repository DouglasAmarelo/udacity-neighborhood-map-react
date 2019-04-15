import React, { Component } from 'react';
import './filter.css';

class Filter extends Component {
	render() {
		const { label } = this.props;

		return(
			<div className="filter card-container">
				<label className="card-title" htmlFor="filter">{label}</label>
				<input className="filter-field" id="filter" type="text" placeholder="Filter places" />
			</div>
		)
	}
}

export default Filter;