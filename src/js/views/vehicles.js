import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Vehicles = () => {
	const {store, actions} = useContext(Context)
	useEffect(()=>{
		actions.getVehicles()
	},[])
	function setSingle(data){
		
		let obj = {
			Name: data.name, 
			"Cost in credits": data.cost_in_credits, 
			Passengers: data.passengers, 
			Speed: data.max_atmosphering_speed, 
			"Cargo Capacity": data.cargo_capacity, 
			Crew: data.crew
		}
		actions.setSingle(obj)
	}

	return (
	<div className="container my-5">
		<h1 style={{color:"red"}}>Vehicles</h1>
		<div className="d-flex flex-row flex-nowrap gap-4" style={{overflowX: "scroll"}}>
			{store.vehicles.map((vehicle, index) =>{return(
				<div className="card gap-0" style={{minWidth: "300px",maxWidth: "300px"}} key={index}>
					<img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top" style={{objectFit: "none", objectPosition: "center", maxHeight: "350px", width: "100%"}}/>
					<div className="card-body">
						<h5 className="card-title">{vehicle.properties.name}</h5>
				  		<div className="card-text">
						  	<p className="m-0">Cargo Capacity: {vehicle.properties.cargo_capacity}</p>
							<p className="m-0">Max Speed: {vehicle.properties.max_atmosphering_speed}</p>
							<p>Crew: {vehicle.properties.crew}</p>
						</div>
				  		<div className="row-col-2 d-flex flex-row justify-content-between">
					  		<Link to={"/single/"+"vehicles/"+vehicle.uid}>
								<a href="#" className="btn btn-outline-primary" onClick={()=> setSingle(vehicle.properties)}>Learn More!</a>
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