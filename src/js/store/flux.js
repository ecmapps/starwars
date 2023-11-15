import { createHashRouter } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			single: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			setSingle: (obj)=> {
				setStore({single:obj})
			},
			getPeople: async () => {
				if(JSON.parse(localStorage.getItem("people")) != null) {
					setStore({people: JSON.parse(localStorage.getItem("people"))})
					return
				}
				try {
					const resp = await fetch('https://www.swapi.tech/api/people')
					if(!resp.ok) {
						console.error(resp.status + ": " + resp.statusText)
					}
					let data = await resp.json()
					//Formatting data to get all character info for each one
					var category = data.results
					category = category.map(person =>fetch(person.url))
					try {
						let responses = await Promise.all(category)
						if(responses.every(response=>response.ok)){
							responses = responses.map(resp => resp.json())
							let data = await Promise.all(responses)
							data = data.map(person => {
								let x = person.result
								return x
							})
							setStore({people:data})
							localStorage.setItem("people", JSON.stringify(data))
							return data
						}
					} catch (error) {
						console.error(error)
					}
				
				} catch (error) {
					console.error(error)
				}
				
			},
			getPlanets: async () => {
				if(JSON.parse(localStorage.getItem("planets")) != null) {
					setStore({planets: JSON.parse(localStorage.getItem("planets"))})
					return
				}
				try {
					const resp = await fetch('https://www.swapi.tech/api/planets')
					if(!resp.ok) {
						console.error(resp.status + ": " + resp.statusText)
					}
					let data = await resp.json()
					var category = data.results
					category = category.map(person =>fetch(person.url))
					try {
						let responses = await Promise.all(category)
						if(responses.every(response=>response.ok)){
							responses = responses.map(resp => resp.json())
							let data = await Promise.all(responses)
							data = data.map(person => {
								let x = person.result
								return x
							})
							setStore({planets:data})
							localStorage.setItem("planets", JSON.stringify(data))
						}
					} catch (error) {
						console.error(error)
					}
				
				} catch (error) {
					console.error(error)
				}
				
			},
			getVehicles: async () => {
				if(JSON.parse(localStorage.getItem("vehicles")) != null) {
					setStore({vehicles: JSON.parse(localStorage.getItem("vehicles"))})
					return
				}
				try {
					const resp = await fetch('https://www.swapi.tech/api/vehicles')
					if(!resp.ok) {
						console.error(resp.status + ": " + resp.statusText)
					}
					let data = await resp.json()
					var category = data.results
					category = category.map(person =>fetch(person.url))
					try {
						let responses = await Promise.all(category)
						if(responses.every(response=>response.ok)){
							responses = responses.map(resp => resp.json())
							let data = await Promise.all(responses)
							data = data.map(person => {
								let x = person.result
								return x
							})
							setStore({vehicles:data})
							localStorage.setItem("vehicles", JSON.stringify(data))
						}
					} catch (error) {
						console.error(error)
					}
				
				} catch (error) {
					console.error(error)
				}
				
			},
			addFavorite: (obj) => {
				const{favorites} = getStore()
				//Prevent same item from being in favorites
				for(let item in favorites){
					if (favorites[item].Name == obj.Name){return}
				}
				let arr = [...favorites, obj]
				setStore({favorites:arr})
				localStorage.setItem("fav",JSON.stringify(arr))
			},
			deleteFavorite: async (index)=>{
				const {favorites} = getStore()
				let temp = favorites
				temp.splice(index, 1)
				setStore({favorites:temp})
				localStorage.setItem("fav", JSON.stringify(temp))
			},
			getFavorites: () => {
				const {favorites} = getStore()
				if(JSON.parse(localStorage.getItem("fav")) != null){ 
					setStore({favorites: JSON.parse(localStorage.getItem("fav"))}) 
				}
			}
		}
	};
};

export default getState;

