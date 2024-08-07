import React from 'react'
import './Join.css'

const Join = () => {
  return (
    <div className="join" id="join-us">
        <div className="left-j">
            <hr/>
            <div>
                <span className='stronke-text'>ready to</span>
                <span> level up</span>
            </div>
            <div>
                <span>your body</span>
                <span className='stronke-text'> with us?</span>
            </div>
        </div>
        <div className="right-j">
            <form action="" className="email-container">
                <input type='email' name='user_email' placeholder='Enter your address '/>
                <button className="btn btn-j">Join Now</button>
            </form>
        </div>
    </div>
  )
}

// to log results (for example: reportWebVitals(console.log))
export default Join