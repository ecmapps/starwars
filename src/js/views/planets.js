import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import getState from "../store/flux";

export const Planets = () => {
	const {store, actions} = useContext(Context)
	useEffect(()=>{
		actions.getPlanets()
	},[])
	function errorImage(e){
		e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
	}
	function setSingle(data){
		
		let obj = {
			Name: data.name, 
			Climate: data.climate, 
			Population: data.population, 
			"Orbital Period": data.orbital_period, 
			"Rotation Period":data.rotation_period, 
			Diameter: data.diameter
		}
		actions.setSingle(obj)
	}
	return (
	<div className="container my-5">
		<h1 style={{color: "red"}}>Planets</h1>
		<div className="d-flex flex-row flex-nowrap gap-4" style={{overflowX: "scroll"}}>
			{store.planets.map((planet, index) =>{return(
				<div className="card gap-0" style={{minWidth: "300px",maxWidth: "300px"}} key={index}>
					<img onError={errorImage} src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" style={{objectFit: "none", objectPosition: "center", maxHeight: "300px", width: "100%"}}/>
					<div className="card-body">
						<h5 className="card-title">{planet.properties.name}</h5>
				  		<div className="card-text">
						  	<p className="m-0">Population: {planet.properties.population}</p>
							<p>Terrain: {planet.properties.terrain}</p>
						</div>
				  		<div className="row-col-2 d-flex flex-row justify-content-between">
					  		<Link to={"/single/"+"planets/"+planet.uid}>
								<a href="#" className="btn btn-outline-primary" onClick={()=> setSingle(planet.properties)}>Learn More!</a>
							</Link>
					  		<a href="#" className="btn btn-outline-warning">F</a>
				  		</div>
					</div>
		  		</div>
			)})}
			
    	</div>
	</div>
);
}