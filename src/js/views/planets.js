import React, { useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import getState from "../store/flux";

export const Planets = () => {
	const [loading, setLoading] = useState(false)
	const {store, actions} = useContext(Context)
	useEffect(()=>{
		loadData()
	},[])
	async function loadData(){
		setLoading(true);
		const response = await actions.getPlanets()
		setLoading(false);
	}
	function spinner() {
		return (
		<div className="loader-container carousel-container">
			<span className="spinner"></span>
		</div>
		)
	}
	function errorImage(e){
		e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
	}
	function setSingle(data, uid, e, action){
		
		let obj = {
			Name: data.name, 
			Climate: data.climate, 
			Population: data.population, 
			"Orbital Period": data.orbital_period, 
			"Rotation Period":data.rotation_period, 
			Diameter: data.diameter,
			id: uid,
			type: "planets"
		}
		if (action == "fav"){
			actions.addFavorite(obj)
		}
		else {actions.setSingle(obj)}
	}
	return (
	<div className="container my-5">
		<h1 style={{color: "red"}}>Planets</h1>
		<div className="d-flex flex-row flex-nowrap gap-4" style={{overflowX: "scroll"}}>
			{loading?spinner():store.planets.map((planet, index) =>{return(
				<div className="card gap-0" style={{minWidth: "300px",maxWidth: "300px"}} key={index}>
					<Link to={"/single/"+"planets/"+planet.uid}>
						<img onError={errorImage} src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} onClick={()=>setSingle(planet.properties, planet.uid)} className="card-img-top" style={{objectFit: "none", objectPosition: "center", maxHeight: "300px", width: "100%"}}/>
					</Link>
					<div className="card-body d-flex flex-column justify-content-between">
						<Link to={"/single/"+"planets/"+planet.uid} style={{textDecoration: "none", color: "black"}}>
							<h5 className="card-title" onClick={()=> setSingle(planet.properties,planet.uid)}>{planet.properties.name}</h5>
						</Link>
				  		<div className="card-text">
						  	<p className="m-0">Population: {planet.properties.population}</p>
							<p>Terrain: {planet.properties.terrain}</p>
						</div>
				  		<div className="row-col-2 d-flex flex-row justify-content-between">
					  		<Link to={"/single/"+"planets/"+planet.uid}>
								<span className="btn btn-outline-warning" onClick={()=> setSingle(planet.properties,planet.uid)}>Learn More!</span>
							</Link>
					  		<button className="btn btn-outline-warning" data-toggle="button" onClick={()=>setSingle(planet.properties, planet.uid, event,"fav")}>♥</button>
				  		</div>
					</div>
		  		</div>
			)})}
			
    	</div>
	</div>
);
}