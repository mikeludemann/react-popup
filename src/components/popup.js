import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './popup.css';

export default class Popup extends Component {

	componentDidMount() {

		var popup = document.getElementsByClassName("popup");

		for (var i = 0; i < popup.length; i++) {

			popup[i].onclick = togglePopup(i);

		}

		function togglePopup(i) {

			return function () {

				if (popup[i].children[1].style.display == "none") {

					popup[i].children[1].style.display = "block";

				} else {

					popup[i].children[1].style.display = "none";

				}

			};

		}

	}

	render() {
		return (
			<div class="popup">
				<div class="popup-text">
					{this.props.defaultText}
				</div>
				<div class={"popup-text-" + this.props.position}>
					{this.props.popupsText}
				</div>
			</div>
		);
	}
}

Popup.propTypes = {
	defaultText: PropTypes.string.isRequired,
	popupsText: PropTypes.string.isRequired,
	position: PropTypes.oneOf(["top","left","right","bottom"]).isRequired
}
