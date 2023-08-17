import { createHashRouter } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			single: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			setSingle: (arr)=> {
				setStore({single:arr})
			},
			getPeople: async () => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/people')
					if(!resp.ok) {
						console.error(resp.status + ": " + resp.statusText)
					}
					let data = await resp.json()
					//Formatting data to get all character info for each one
					var category = data.results
					console.log({category})
					category = category.map(person =>fetch(person.url))
					try {
						let responses = await Promise.all(category)
						if(responses.every(response=>response.ok)){
							console.log('All resp ok')
							responses = responses.map(resp => resp.json())
							let data = await Promise.all(responses)
							data = data.map(person => {
								let x = person.result
								return x
							})
							setStore({people:data})
						}
					} catch (error) {
						console.error(error)
					}
				
				} catch (error) {
					console.error(error)
				}
				
			},
			getPlanets: async () => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/planets')
					if(!resp.ok) {
						console.error(resp.status + ": " + resp.statusText)
					}
					let data = await resp.json()
					//Formatting data to get all character info for each one
					var category = data.results
					console.log({category})
					category = category.map(person =>fetch(person.url))
					try {
						let responses = await Promise.all(category)
						if(responses.every(response=>response.ok)){
							console.log('All resp ok')
							responses = responses.map(resp => resp.json())
							let data = await Promise.all(responses)
							data = data.map(person => {
								let x = person.result
								return x
							})
							setStore({planets:data})
						}
					} catch (error) {
						console.error(error)
					}
				
				} catch (error) {
					console.error(error)
				}
				
			},
			getVehicles: async () => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/vehicles')
					if(!resp.ok) {
						console.error(resp.status + ": " + resp.statusText)
					}
					let data = await resp.json()
					//Formatting data to get all character info for each one
					var category = data.results
					console.log({category})
					category = category.map(person =>fetch(person.url))
					try {
						let responses = await Promise.all(category)
						if(responses.every(response=>response.ok)){
							console.log('All resp ok')
							responses = responses.map(resp => resp.json())
							let data = await Promise.all(responses)
							data = data.map(person => {
								let x = person.result
								return x
							})
							setStore({vehicles:data})
						}
					} catch (error) {
						console.error(error)
					}
				
				} catch (error) {
					console.error(error)
				}
				
			},
			// getFavorites: async () => {
			// 	fetch('https://playground.4geeks.com/apis/fake/todos/user/ecmapps').then(response =>{}) {
			// 		if(!response.ok){
			// 			//404 event check and user creation 
			// 			if (response.status == 404){
			// 				createUser()
			// 			}
			// 			else {throw Error(response.statusText);}
			// 		}
			// 	}
			// },
			// createUser: async() => {

			// },
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

