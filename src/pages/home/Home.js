import React, { Component } from 'react';
import Icons from '../../components/Icons/Icons';
import './Home.css';

export default class Home extends Component {
	render() {
		return (
			<div id={'home'}>
				<div id={'container'}>
					<Icons />
				</div>
			</div>
		);
	}
}
