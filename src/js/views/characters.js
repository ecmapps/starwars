import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/spinner.css"
import { Context } from "../store/appContext";

export const Characters = () => {
	const {store, actions} = useContext(Context)
	const [loading, setLoading] = useState(false)

	useEffect(()=>{
		loadData()
	},[])
	async function loadData(){
		setLoading(true);
		const response = await actions.getPeople("people")
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
			"Birth Year": data.birth_year, 
			Gender: data.gender, 
			Height: data.height, 
			"Skin Color": data.skin_color, 
			"Eye Color": data.eye_color,
			id: uid,
			type: "characters"
		}
		if (action == "fav"){
			actions.addFavorite(obj)
		}
		else {actions.setSingle(obj)}
	}
	return (
	<div className="container main-container mt-2 mb-5">
		<h1 style={{color:"red"}}>Characters</h1>
		<div className="d-flex flex-row flex-nowrap gap-4" style={{overflowX: "scroll"}}>
			{(loading?spinner():store.people.map((person, index) =>{return(
				<div className="card gap-0" style={{minWidth: "300px",maxWidth: "300px"}} key={index}>
					<Link to={"/single/"+"characters/"+person.uid}>
						<img src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`} onClick={()=>setSingle(person.properties, person.uid)} className="card-img-top" style={{objectFit: "none", objectPosition: "top", maxHeight: "350px", width: "100%"}}/>
					</Link>
					<div className="card-body d-flex flex-column justify-content-between">
						<Link to={"/single/"+"characters/"+person.uid} style={{textDecoration: "none", color: "black"}}>
							<h5 className="card-title" onClick={()=>setSingle(person.properties, person.uid)}>{person.properties.name}</h5>
						</Link>
				  		<div className="card-text">
						  	<p className="m-0">Gender: {person.properties.gender}</p>
							<p className="m-0">Hair Color: {person.properties.hair_color}</p>
							<p>Eye-Color: {person.properties.eye_color}</p>
						</div>
				  		<div className="row-col-2 d-flex flex-row justify-content-between">
					  		<Link to={"/single/"+"characters/"+person.uid}>
								<span className="btn btn-outline-warning" onClick={()=>setSingle(person.properties, person.uid)}>Learn More!</span>
							</Link>
					  		<span className="btn btn-outline-warning" onClick={()=>setSingle(person.properties, person.uid, "fav")}>♥</span>
				  		</div>
					</div>
		  		</div>
			)}))}
			
    	</div>
	</div>
);
}