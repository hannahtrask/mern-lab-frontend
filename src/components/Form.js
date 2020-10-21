import React from 'react'
import '../scss/app.scss'

const Form = (props) => {


//add an edit button here in the display




    return (
			<div className='form'>
				<form>
					<h3>ADD A GARDEN</h3>
					<input type='text' 
						   name='garden'
						   value='name your garden' 
					/>
					<input
						type='text'
						name='image'
						value='add an image'
					/>
					{/* consider figuring out how to add plants to the garden if you have time */}

					<input type='submit' value='GROW' className='submit' />
				</form>
			</div>
		);




}

export default Form