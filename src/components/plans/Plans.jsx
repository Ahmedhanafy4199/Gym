import React from 'react'
import {plansData} from '../../data/plansData'
import './Plans.css'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
        <div className="blur blur-p-1"></div>
        <div className="blur blur-p-2"></div>
        <div className="programs-header">
            <span className='stronke-text'>Ready to start</span>
            <span >Your journey</span>
            <span className='stronke-text'>Now withus</span>
        </div>

        {/*plans card*/}
        <div className="plans">
            {plansData.map((plan,i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature,i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt=''/>
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div >
                        <span >See more benefits </span>
                        <div className='btn-div'>
                            <button className="btn">Join now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

// to log results (for example: reportWebVitals(console.log))
export default Plans