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
		fetch(url+'/gardens/', {
			method: "post",
			headers: {
				"Content-Type":"application/json"
			},
			body: JSON.stringify(newGarden)
		}).then(() => {
			//don't need a response, just need to update list of gardens
			//pass this down to form
			getGardens()
		})
	}

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
					render={(rp) => <Display {...rp} garden={gardens} />}
				/>
				<Route
					exact
					path='/create'
					render={(rp) => 
					<Form {...rp} label='create' garden={emptyGarden} handleCreate={handleCreate} />}
				/>
			</Switch>
		</>
	);
}

export default App;
