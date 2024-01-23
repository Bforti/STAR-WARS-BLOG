import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	
	let { store, actions } = useContext(Context)
	


	return (
		<nav className="navbar navbar-light bg-light mb-3 px-4 border rounded">
			
				<span className="navbar-brand mb-0 h1">starwars</span>
		
			<div className="btn-group">
				<button type="button" className="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
					Favoritos {store.favoritos.length}
				</button>
				<ul className="dropdown-menu dropdown-menu-lg-end">
					{store.favoritos.map((item) => {
						return(
						<li
						key={item._id}
						className="d-flex justify-content-between"><button
							className="dropdown-item"
							type="button">{item.properties.name}
						</button>
						<button 
						className="btn btn-danger me-1"
						onClick={()=>actions.delFav(item)}>
							<i className="fa fa-trash"></i>
							</button>
							</li>
						)
						

					})}


				</ul>
			</div>

		</nav>
	);
};