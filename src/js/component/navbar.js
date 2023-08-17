import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 px-3 sticky-top">
			<div className="container">
				<Link to="/">
					<img src='https://pngimg.com/d/star_wars_logo_PNG37.png' style={{maxHeight: "50px"}} / >
					{/* <img src='https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png' style={{maxHeight: "80px"}} / > */}
				</Link>
				{/* <div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" id="dropdownMenuButton1" aria-expanded="false">Favorites </button>
					<ul className="dropdown-menu" id="dropdownMenuButton1">
						<li><h1 className="dropdown-item">Demo</h1></li>
					</ul>
				</div> */}
				<div class="dropdown">
					<button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
						<div className="d-inline-flex">
							<p className="my-0 me-1">Favorites </p>
							<small className="my-0 px-1" style={{background:"grey", borderRadius: "50% 50%"}}><strong>{store.favorites.length}</strong></small>
						</div>
					</button>
					<ul class="dropdown-menu dropdown-menu-end align-self-center" aria-labelledby="dropdownMenuButton1">
						<li className="d-flex justify-content-between flex-column">
							{store.favorites.map((item, index)=>{return(
								<div className="d-inline-flex justify-content-between pe-2 pt-1" key={index}>
									<Link to={"/single/"+item.type+"/"+item.id}>
										<a className="dropdown-item" onClick={()=> actions.setSingle(item)}>{item.Name}</a>
									</Link>
									<a className="align-self-center" onClick={()=> actions.deleteFavorite(index)}>X</a>
								</div>
							)
							})}							
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
