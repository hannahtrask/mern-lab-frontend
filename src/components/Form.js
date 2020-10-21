import React from 'react'
import '../scss/app.scss'

const Form = (props) => {


//add an edit button here in the display




    return (
			<div className='form'>
				<form>
					<h3>ADD A PLANT TO THE GARDEN</h3>
					<input type='text' name='plant' value='plant name' />

                    {/*consider making these radio buttons if you have time*/}

					<input type='text' name='edible' value='edible? true or false' />
					<input type='text' name='vegetable' value='vegetable? t or f' />
					<input type='text' name='flower' value='edible? t or f' />


					<input type='submit' value='GROW' className='submit' />
				</form>
			</div>
		);




}

export default Form