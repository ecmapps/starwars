import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Vehicles = () => {
	const {store, actions} = useContext(Context)
	useEffect(()=>{
		actions.getVehicles()
	},[])
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
			{store.vehicles.map((vehicle, index) =>{return(
				<div className="card gap-0" style={{minWidth: "300px",maxWidth: "300px"}} key={index}>
					<Link to={"/single/"+"vehicles/"+vehicle.uid}>
						<img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} onClick={()=> setSingle(vehicle.properties, vehicle.uid)} className="card-img-top" style={{objectFit: "none", objectPosition: "center", maxHeight: "350px", width: "100%"}}/>
					</Link>
					<div className="card-body">
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
								<a className="btn btn-outline-dark" onClick={()=> setSingle(vehicle.properties, vehicle.uid)}>Learn More!</a>
							</Link>
					  		<a className="btn btn-outline-warning" onClick={()=> setSingle(vehicle.properties, vehicle.uid, "fav")}>♥</a>
				  		</div>
					</div>
		  		</div>
			)})}
			
    	</div>
	</div>
);
}