import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 px-3">
			<div className="container">
				<Link to="/">
					STAR WARS
				</Link>
				{/* <div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" id="dropdownMenuButton1" aria-expanded="false">Favorites </button>
					<ul className="dropdown-menu" id="dropdownMenuButton1">
						<li><h1 className="dropdown-item">Demo</h1></li>
					</ul>
				</div> */}
				<div class="dropdown">
					<button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites 
					</button>
					<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
						<li className="d-flex justify-content-between">
							<a class="dropdown-item">Action number 1</a>
							
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
