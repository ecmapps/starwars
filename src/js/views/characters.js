import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Characters = () => {
	const {store, actions} = useContext(Context)
	useEffect(()=>{
		actions.getPeople()
	},[])
	function setSingle(data){
		
		let obj = {
			Name: data.name, 
			"Birth Year": data.birth_year, 
			Gender: data.gender, 
			Height: data.height, 
			"Skin Color": data.skin_color, 
			"Eye Color": data.eye_color
		}
		actions.setSingle(obj)
	}
	return (
	<div className="container my-5">
		<h1 style={{color:"red"}}>Characters</h1>
		<div className="d-flex flex-row flex-nowrap gap-4" style={{overflowX: "scroll"}}>
			{store.people.map((person, index) =>{return(
				<div className="card gap-0" style={{minWidth: "300px",maxWidth: "300px"}} key={index}>
					<img src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`} className="card-img-top" style={{objectFit: "none", objectPosition: "top", maxHeight: "350px", width: "100%"}}/>
					<div className="card-body">
						<h5 className="card-title">{person.properties.name}</h5>
				  		<div className="card-text">
						  	<p className="m-0">Gender: {person.properties.gender}</p>
							<p className="m-0">Hair Color: {person.properties.hair_color}</p>
							<p>Eye-Color: {person.properties.eye_color}</p>
						</div>
				  		<div className="row-col-2 d-flex flex-row justify-content-between">
					  		<Link to={"/single/"+"characters/"+person.uid}>
								<a href="#" className="btn btn-outline-primary" onClick={()=>setSingle(person.properties)}>Learn More!</a>
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