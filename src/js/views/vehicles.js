import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Vehicles = () => {
	const [loading, setLoading] = useState(false)
	const {store, actions} = useContext(Context)
	useEffect(()=>{
		loadData()
	},[])
	async function loadData(){
		setLoading(true);
		const response = await actions.getVehicles()
		setLoading(false);
	}
	function spinner() {
		return (
		<div className="loader-container carousel-container">
			<span className="spinner"></span>
		</div>
		)
	}
	function setSingle(data, uid, action){
		
		let obj = {
			Name: data.name, 
			"Cost in credits": data.cost_in_credits, 
			Passengers: data.passengers, 
			Speed: data.max_atmosphering_speed, 
			"Cargo Capacity": data.cargo_capacity, 
			Crew: data.crew,
			id: uid,
			type: "vehicles"
		}
		if (action == "fav"){
			actions.addFavorite(obj)
		}
		else {actions.setSingle(obj)}
	}

	return (
	<div className="container my-5 pb-5">
		<h1 style={{color:"red"}}>Vehicles</h1>
		<div className="d-flex flex-row flex-nowrap gap-4" style={{overflowX: "scroll"}}>
			{loading?spinner():store.vehicles.map((vehicle, index) =>{return(
				<div className="card gap-0" style={{minWidth: "300px",maxWidth: "300px"}} key={index}>
					<Link to={"/single/"+"vehicles/"+vehicle.uid}>
						<img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} onClick={()=> setSingle(vehicle.properties, vehicle.uid)} className="card-img-top" style={{objectFit: "none", objectPosition: "center", maxHeight: "350px", width: "100%"}}/>
					</Link>
					<div className="card-body d-flex flex-column justify-content-between">
						<Link to={"/single/"+"vehicles/"+vehicle.uid} style={{textDecoration: "none", color: "black"}}>
							<h5 className="card-title" onClick={()=> setSingle(vehicle.properties, vehicle.uid)}>{vehicle.properties.name}</h5>
				  		</Link>
						<div className="card-text">
						  	<p className="m-0">Cargo Capacity: {vehicle.properties.cargo_capacity}</p>
							<p className="m-0">Max Speed: {vehicle.properties.max_atmosphering_speed}</p>
							<p>Crew: {vehicle.properties.crew}</p>
						</div>
				  		<div className="row-col-2 d-flex flex-row justify-content-between">
					  		<Link to={"/single/"+"vehicles/"+vehicle.uid}>
								<span className="btn btn-outline-dark" onClick={()=> setSingle(vehicle.properties, vehicle.uid)}>Learn More!</span>
							</Link>
					  		<span className="btn btn-outline-warning" onClick={()=> setSingle(vehicle.properties, vehicle.uid, "fav")}>♥</span>
				  		</div>
					</div>
		  		</div>
			)})}
			
    	</div>
	</div>
);
}