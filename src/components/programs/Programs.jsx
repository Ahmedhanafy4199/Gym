import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/*header*/}
        <div className="programs-header">
            <span className='stronke-text'>Explore our</span>
            <span >programs</span>
            <span className='stronke-text'>to shape you</span>
        </div>

        {/*program-cateogries*/}
        <div className="program-cateogries">
            {programsData.map((program) => (
                <div className="cateogry">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt='arrow'/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

// to log results (for example: reportWebVitals(console.log))
export default Programs