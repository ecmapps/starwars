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
				</Link>
				<div class="dropdown">
					<button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
						<div className="d-inline-flex">
							<p className="my-0 me-1">Favorites </p>
							<small className="my-0 px-1 align-self-center" style={{background:"grey", borderRadius: "50% 50%"}}><strong>{store.favorites.length}</strong></small>
						</div>
					</button>
					<ul class="dropdown-menu dropdown-menu-end align-self-center" aria-labelledby="dropdownMenuButton1">
						{((store.favorites.length < 1? (<li className="text-center">No favorites</li>):store.favorites.map((item, index)=>{return(
							<li className="d-flex justify-content-between flex-column">
								<div className="d-inline-flex justify-content-between pe-2 pt-1" key={index}>
									<Link to={"/single/"+item.type+"/"+item.id} style={{textDecoration: "none", color: "black"}}>
										<a className="dropdown-item" onClick={()=> actions.setSingle(item)} style={{textDecoration:"none"}}>{item.Name}</a>
									</Link>
									<a className="align-self-center" style={{textDecoration: "none"}} onClick={()=> actions.deleteFavorite(index)}>X</a>
								</div>
							</li>
						)
						})))}							
						
					</ul>
				</div>
			</div>
		</nav>
	);
};
