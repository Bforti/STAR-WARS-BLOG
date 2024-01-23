import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";


import "../../styles/home.css";


const Detalle = () => {
    const { nature, id } = useParams()
    const { store } = useContext(Context)
    const [characterDetail, setCharacterDetail] = useState({})
    const [planetDetail, setPlanetDetail] = useState({})
    const [vehicleDetail, setVehicleDetail] = useState({})


    const findCharacter = () => {
        const character = store.characters.find((item) => item._id == id)
        setCharacterDetail(character)
    }
    const findPlanet = () => {
        const planet = store.planets.find((item) => item._id == id)
        setPlanetDetail(planet)
    }
    const findVehicle = () => {
        const vehicle = store.vehicles.find((item) => item._id == id)
        setVehicleDetail(vehicle)
    }
    useEffect(() => {
        findCharacter()
    }, [store.characters])
    useEffect(() => {
        findPlanet()
    }, [store.planets])
    useEffect(() => {
        findVehicle()
    }, [store.vehicles])
    let aux = ""
    let auxImg = ""
    

    if (nature == "characters") {
        aux = characterDetail;
        auxImg = "characters"
       

    }
    else if (nature == "planets") {
        aux = planetDetail
        auxImg = "planets"
    
    }
    else {
        aux = vehicleDetail
        auxImg = "vehicles"
       

    }



    return (

        <>
            {aux?._id ? (<div className="container-fluid bg-light p-2 border rounded">
                <div className="body d-flex">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/${auxImg}/${aux.uid}.jpg`}
                        className="border rounded" />
                    <div className="ms-2">
                        <h2>{aux.properties.name}</h2>

                        <p>{aux.description}</p>
                    </div>



                </div>
                <div class="text-danger p-2">
                    <hr  className="border border-danger border-2 opacity-50"/>
                    <div className="row">
                    <div className="col-2">
                        <h5>Name</h5>
                        <p>{aux.properties.name}</p>
                      

                    </div>
                    <div className="col-2">
                    <h5>{nature=="characters" ? 
                    "Birth year" : 
                    nature=="planets"? 
                    "diameter":
                    "Cost in Credits"}</h5>
                    <p>{nature=="characters" ?
                     aux.properties.birth_year :
                      nature=="planets" ? 
                      aux.properties.diameter:aux.properties.cost_in_credits}</p>
                    </div>
                    <div className="col-2">
                    <h5>{nature=="characters" ? 
                    "Gender" : 
                    nature=="planets"? 
                    "Population":
                    "passengers"}</h5>
                    <p>{nature=="characters" ? 
                    aux.properties.gender : 
                    nature=="planets" ? 
                    aux.properties.population:aux.properties.passengers}</p>
                    </div>
                    <div className="col-2">
                    <h5>{nature=="characters" ? 
                    "height" : 
                    nature=="planets"? 
                    "climate":
                    "vehicle class"}</h5>
                    <p>{nature=="characters" ? 
                    aux.properties.height : 
                    nature=="planets" ? 
                    aux.properties.climate:aux.properties.vehicle_class}</p>
                    </div>
                    <div className="col-2">
                    <h5>{nature=="characters" ? 
                    "hair color" : 
                    nature=="planets"? 
                    "rotation period":
                    "manufacturer"}</h5>
                    <p>{nature=="characters" ? 
                    aux.properties.hair_color : 
                    nature=="planets" ? 
                    aux.properties.rotation_period:aux.properties.manufacturer}</p>
                    </div>
                    <div className="col-2">
                    <h5>{nature=="characters" ? 
                    "eye color" : 
                    nature=="planets"? 
                    "gravity":
                    "model"}</h5>
                    <p>{nature=="characters" ? 
                    aux.properties.eye_color : 
                    nature=="planets" ? 
                    aux.properties.gravity:aux.properties.model}</p>
                    </div>
                      </div>

                </div>
                <div className="footer d-flex justify-content-center p-3">

                    <Link to="/">
                        <button type="button" class="btn btn-info p-0">Volver a la página principal</button>
                    </Link>






                </div>








            </div>) : <div>loading...</div>}


        </>
    )

}









export default Detalle