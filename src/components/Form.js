import React, { useState } from 'react'
import '../scss/app.scss'

const Form = (props) => {
	console.log('this is props in form, ', props);
	//setting the state for the form
	//check components to see if hooks exist
	//if they do... YAY!!
	const [data, setData] = useState(props.garden);

	//checking for data
	console.log('this is data, ', data);
	//this is for the form things
	const handleSubmit = (e) => {
		//prevents refresh on submit
		e.preventDefault();
		//this is the handleCreate function from app
		props.handleCreate(data);
		//this will send you back to the display page after submitting
		//or it should, for whatever reason it won't
		props.history.push('/');
	};

	//this will handle the form being typed in
	const handleForm = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	return (
		<div className='form'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='name'
					placeholder= 'name your garden'
					//will set val to whatever is typed in
					value={data.name}
					onChange={handleForm}
				/>
				<input
					type='text'
					name='image'
					placeholder='add an image'
					value={data.image}
					onChange={handleForm}
				/>
				{/* consider figuring out how to add plants to the garden if you have time */}

				<input type='submit' value='GROW' className='submit' />
			</form>
		</div>
	);
}

export default Form