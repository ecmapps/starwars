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
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: async () => {
				//const {people} = getStore()
				try {
					const resp = await fetch(`https://www.swapi.tech/api/people`)
					if(!resp.ok) {
						console.error(resp.status + ": " + resp.statusText)
					}
					let data = await resp.json()
					//Formatting data to get all character info for each one
					var allPeople = data.results
					allPeople = allPeople.map(person =>fetch(person.url))
					try {
						let responses = await Promise.all(allPeople)
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
						
					}

				} catch (error) {
					console.error(error)
				}
			},
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
