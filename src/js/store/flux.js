const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos: [],
			characters: [],
			
			planets: [],
			
			vehicles: [],
			urlBase: "https://www.swapi.tech/api/"
		},
		actions: {
			getCharacters: async () => {
				try {
					let response = await fetch(`${getStore().urlBase}people`)
					let data = await response.json()



					if (response.ok) {
						
						for (let i of data.results) {
							try {
								let responsePeople = await fetch(`${getStore().urlBase}people/${i.uid}`)
								let dataPeople = await responsePeople.json()

								setStore({ characters: [...getStore().characters, dataPeople.result] })

							} catch (error) {
								console.log(error)
							}
						}

					}


				} catch (error) {
					console.log(error)

				}

			},
			getPlanets: async () => {
				try {
					let response = await fetch(`${getStore().urlBase}planets`)
					let data = await response.json()

					if (response.ok) {
						
						for (let i of data.results) {
							try {
								let responsePlanets = await fetch(`${getStore().urlBase}planets/${i.uid}`)
								let dataPlanets = await responsePlanets.json()

								setStore({ planets: [...getStore().planets, dataPlanets.result] })
							} catch (error) {
								console.log(error)

							}
						}
					}

				} catch (error) {
					console.log(error)

				}
			},
			getVehicles: async () => {
				try {
					let response = await fetch(`${getStore().urlBase}vehicles`)
					let data = await response.json()
					if (response.ok) {
						console.log(data)
						for(let i of data.results){
							try {
								let responseVehicles= await fetch(`${getStore().urlBase}vehicles/${i.uid}`)
								let dataVehicles= await responseVehicles.json()
	
								setStore({vehicles:[...getStore().vehicles, dataVehicles.result]})
	
							} catch (error) {
								console.log(error)
								
							}
						}


					}

				} catch (error) {
					console.log(error)

				}
			},

			addFav:  (añadirFav)=>{

				let existe=getStore().favoritos.some((item)=>item._id==añadirFav._id)
				if(existe){
				let newL = getStore().favoritos.filter((item)=>item._id!= añadirFav._id)
					setStore({favoritos:newL})
				}
				else{
					setStore({favoritos:[...getStore().favoritos, añadirFav]})

				}


				



			},
			delFav:  (delFav)=>{
				
				let newL = getStore().favoritos.filter((item)=>item._id!= delFav._id)
					setStore({favoritos:newL})
				

		}

		}
	};
};

export default getState;