import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Card = ({ item }) => {
	let { store, actions } = useContext(Context)
	let { properties, description } = item
	let urlCharacters = `https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`
	let urlPLanets = `https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`
	let urlVehicles = `https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`
	let urlAux = ""
	let info = ""
	let info2 = ""
	let info3 = ""
	let nature = ""
	if (description == "A person within the Star Wars universe") {
		urlAux = urlCharacters
		nature = "characters"
		info = `hair-color=${properties.hair_color}`
		info2 = `eye-color=${properties.eye_color}`
		info3 = `gender=${properties.gender}`

	}
	else if (description == "A planet.") {
		urlAux = urlPLanets
		nature = "planets"
		info = `population=${properties.population}`
		info2 = `climate=${properties.climate}`
		info3 = `terrain=${properties.terrain}`
	}
	else {
		urlAux = urlVehicles
		nature = "vehicles"
		info = `Vehicle className=${properties.vehicle_class}`
		info2 = `model=${properties.model}`
		info3 = `cost in credits=${properties.cost_in_credits}`

	}
	const simbolo="far fa-heart"

	let click=()=>{
		return(
			actions.addFav(item)
			
			
		)
	}
		



	





	return (
		<>

			<div className="my-card card container mx-2 my-1 p-1" >
				<img src={urlAux} className="card-img-top foto" alt="..." />
				<div className="card-body container">
					<h5 className="card-title m-0">{properties.name}</h5>
					<p className="card-text small">{info}</p>
					<p className="card-text small">{info2}</p>
					<p className="card-text small">{info3}</p>

					<div className="d-flex justify-content-between">


					<Link to={`/${nature}/${item._id}`} className="btn btn-primary py-0">Detalle</Link>
					<button type="button" className="btn btn-outline-warning"
					onClick={click}>
					<i className={simbolo} ></i>
					</button>
					</div>
				</div>
			</div>

		</>









	)








}


