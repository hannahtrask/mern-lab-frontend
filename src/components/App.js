import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../scss/app.scss'
import Form from './Form'
import Display from './Display'
import axios from 'axios'

function App() {


//url for garden display
const url = 'https://mern-lab-backend1.herokuapp.com'
//instantiating instance to set the gardens
const [gardens, setGardens] = useState([])

//this will get all gardens
const getGardens = () => {
	axios.get(url+'/gardens/')
	.then(res=>{
		const gardenArr=res.data
		setGardens(gardenArr)
	})
}
//data received, can see in console log below
//now pass to display
console.log(gardens)
//this will get all gardens on mount
useEffect(()=>getGardens(), [])







  return (
		<>
			<nav>
				<Link to='/' className='gardens'>
					<h1>GARDENS</h1>
				</Link>
			</nav>
			<Link to='/create' className='button'>
				<button>ADD A GARDEN</button>
			</Link>
			<Switch>
				<Route exact path='/' 
					   render={(rp) => <Display {...rp}
						garden={gardens}
						/>}
					/>
				<Route exact path='/create' component={Form} />
			</Switch>
		</>
	);
}

export default App;
