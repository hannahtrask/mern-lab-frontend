import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../scss/app.scss'
import Form from './Form'
import Display from './Display'
import axios from 'axios'

function App() {
	//url for garden display
	const url = 'https://mern-lab-backend1.herokuapp.com';
	//instantiating instance to set the gardens
	const [gardens, setGardens] = useState([]);
	//setting an empty garden to send to form
	const emptyGarden = {
		name: '',
		image: '',
	};

	//this will get all gardens
	const getGardens = () => {
		axios.get(url + '/gardens/').then((res) => {
			const gardenArr = res.data;
			setGardens(gardenArr);
		});
	};
	//data received, can see in console log below
	//now pass to display
	console.log(gardens);

	//this will get all gardens on mount
	useEffect(() => getGardens(), []);

	//this function will handle creating a garden!! didn't use axios.. ASK!!
	const handleCreate = (newGarden) => {
		fetch(url + '/gardens/', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newGarden),
		}).then(() => {
			//don't need a response, just need to update list of gardens
			//pass this down to form
			getGardens();
		});
	};

	//LAST STEP!!! UPDATE GARDEN!!! AH!
	//steps:

	//create state so that when you click on garden it'll take you to associated form
	const [selectedGarden, setSelectedGarden] = useState(emptyGarden);

	//create a function that will make put request and return updated garden set
	const handlePropagate = (garden) => {
		axios.put(
				url + '/gardens/' + garden._id
				//  {
				// 	method: "put",
				// 	headers: {
				// 		"Content-Type":"application/json"
				// 	},
				// 	body: JSON.stringify(garden)
				// }
			)
			.then(() => {
				getGardens();
			});
	};

	//this func will set the garden to that. send to form
	//can prob refactor so there's not so much happening in app.js
	//send to display to lift to app and then send to form
	//use history.push('/update')
	const selectGarden = (garden) => {
		setSelectedGarden(garden)
	}

	//this will delete a garden
	//try using axios
	const plowGarden = (garden) => {
		axios
			.delete(url + '/gardens/' + garden._id)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err))
			.then(() => getGardens());
	};

	return (
		<>
			<nav>
				<Link to='/' className='gardens'>
					<h1>GARDENS</h1>
				</Link>
			</nav>
			<Link to='/create' className='button'>
				<button className='add'>ADD A GARDEN</button>
			</Link>
			<Switch>
				<Route
					exact
					path='/'
					render={(rp) => (
						<Display {...rp} garden={gardens} 
										 plowGarden={plowGarden}
										 selectGarden={selectGarden} />
					)}
				/>
				<Route
					exact
					path='/update'
					render={(rp) => (<Form
										{...rp}
										garden={selectedGarden}
										handlePropagate={handlePropagate}/>
					)}
				/>
				<Route
					exact
					path='/create'
					render={(rp) => (
						<Form
							{...rp}
							label='create'
							garden={emptyGarden}
							handleCreate={handleCreate}
						/>
					)}
				/>
			</Switch>
		</>
	);
}

export default App;
