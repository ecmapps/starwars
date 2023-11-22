import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";
import '../../styles/navbar.css'
import logo from '../../img/sw_logo.png'

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar mb-2 sticky-top main-container">
			<div className="container nav-container gap-3 transparent-background">
				<Link to="/">
					<img src={logo}/>
				</Link>
				<div className="dropdown">
					<button className="btn btn-warning rounded-pill dropdown-toggle px-3 py-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
						<div className="d-inline-flex">
							<p className="my-0 me-1">Favorites </p>
							<div className="rounded-circle bg-light favorites-counter d-flex justify-content-center align-items-center">
								<small className=""><strong>{store.favorites.length}</strong></small>
							</div>
						</div>
					</button>
					<ul className="dropdown-menu dropdown-menu-end align-self-center transparent-background" aria-labelledby="dropdownMenuButton1">
						{((store.favorites.length < 1? <li className="text-center">No favorites</li>:store.favorites.map((item, index)=>{return(
							<li className="d-flex justify-content-between flex-column" key={index}>
								<div className="d-inline-flex justify-content-between pe-2 pt-1">
									<Link to={"/single/"+item.type+"/"+item.id} style={{textDecoration: "none", color: "black"}}>
										<span className="dropdown-item yellow-text" onClick={()=> actions.setSingle(item)} style={{textDecoration:"none"}}>{item.Name}</span>
									</Link>
									<span className="align-self-center" style={{textDecoration: "none", color:"white"}} onClick={()=> actions.deleteFavorite(index)}>X</span>
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
