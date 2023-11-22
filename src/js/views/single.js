import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import '../../styles/single.css'

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	
	function errorImage(e){
		e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
	}

	return (
		<div className="container pb-4 info-container">
			<div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
				<div className="col d-flex align-items-center">
					<img onError={errorImage} src={`https://starwars-visualguide.com/assets/img/${params.type}/${params.theid}.jpg`} style={{width: "100%", display: "block", maxHeight: "75vh", objectFit: "contain"}}/>
				</div>
				<div className="col">
					<div><h1 className="display-4">{store.single.Name}</h1></div>
					<div>
						<p className="font-monospace card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus condimentum orci congue auctor. Integer non pharetra metus. In id nisi condimentum, fermentum eros sed, condimentum diam. Donec sit amet nulla orci. Nam efficitur, nulla sed sagittis iaculis, tellus dolor rhoncus ante, sit amet placerat massa orci eu lacus. Sed sagittis est venenatis, luctus metus nec, lacinia purus. Fusce ac ipsum id nisi euismod convallis. Nunc hendrerit massa in lacus suscipit, sed accumsan augue auctor. Praesent aliquam dui eu ante tincidunt, vehicula dignissim dolor sagittis. In hac habitasse platea dictumst. Nullam ut ligula volutpat, euismod purus ac, viverra est. Pellentesque vestibulum augue ante, in commodo purus condimentum eu. Aenean ut enim dolor. Cras felis libero, ultricies non bibendum sit amet, eleifend eu dolor. Proin condimentum nisl ac magna dictum ullamcorper. Cras tincidunt bibendum est, malesuada molestie urna vulputate in.</p>
					</div>
				</div>
			</div>
			{/* Data from character */}
			<hr className="my-4 yellow-text" style={{height:"2px"}}/ >
			<div className="yellow-text">
				<div className="row row-col-auto justify-content-around text-center info-container">
					<div className="col">
						<p>{Object.keys(store.single)[0]}</p>
						<p>{Object.values(store.single)[0]}</p>
					</div>
					<div className="col">
						<p>{Object.keys(store.single)[1]}</p>
						<p>{Object.values(store.single)[1]}</p>
					</div>
					<div className="col">
						<p>{Object.keys(store.single)[2]}</p>
						<p>{Object.values(store.single)[2]}</p>
					</div>
					<div className="col">
						<p>{Object.keys(store.single)[3]}</p>
						<p>{Object.values(store.single)[3]}</p>
					</div>
					<div className="col">
						<p>{Object.keys(store.single)[4]}</p>
						<p>{Object.values(store.single)[4]}</p>
					</div>
					<div className="col">
						<p>{Object.keys(store.single)[5]}</p>
						<p>{Object.values(store.single)[5]}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
