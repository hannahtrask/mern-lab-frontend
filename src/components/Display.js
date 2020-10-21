import React from 'react'
import '../scss/app.scss'
import '../scss/display.scss'

const Display = (props) => {


    //checking for good prop pass
    console.log('this is props in display,',props)
    //this is the garden array
    const gardenArr = props.garden.data
    //checking for gardenArr 
    console.log('this is gardenArr,', gardenArr)


    const loaded = () => {
        if (Array.isArray(gardenArr)) {
            return (
							<div className='garden-card'>
								{gardenArr.map((garden) => (
									<div className='single-garden'>
										<img src={garden.image} />
										<h2>{garden.name}</h2>
										<p>{garden.plants}</p>
										<div className='button-div'>
											<button onClick={()=>{
                                                props.plowGarden(garden)
                                            }} className='update-delete'>
												PLOW GARDEN
											</button>
											<button className='update-delete'>
												UPDATE GARDEN DETAILS
											</button>
										</div>
									</div>
								))}
							</div>
						);
        }
    }


    const loading = <h2>loading gardens . . .</h2>

return (Array.isArray(gardenArr)) ? loaded() : loading
    
    
    
}

export default Display