import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../scss/app.scss'
import Form from './Form'
import Display from './Display'

function App() {
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
				<Route exact path='/' component={Display} />
				<Route exact path='/create' component={Form} />
			</Switch>
		</>
	);
}

export default App;
