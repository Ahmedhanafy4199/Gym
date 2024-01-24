import React, { useState } from 'react'
import './Testimoniols.css'
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'

const Testimoniols = () => {

    const[selected,setSelected]=useState(0);
    const tLength=testimonialsData.length;
    const transition ={type:'spring' , duration:3}

  return (
    <div className="Testimoniols" id="testimoniols">
        <div className="left-t">
            <span>Testimoniols</span>
            <span className='stroke-text'>what they</span>
            <span>say about us</span>
            <motion.span
                key={selected}
                initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:0}}
                transition={transition}
                exit={{opacity:0,x:100}}
            >
                {testimonialsData[selected].review}
            </motion.span>
            <span>
                <span style={{color:'orange'}}>
                    {testimonialsData[selected].name}
                </span>{" "}
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <motion.div
                initial={{opacity:0,x:-100}}
                transition={transition}
                whileInView={{opacity:1,x:0}}
            ></motion.div>
            <motion.div
                initial={{opacity:0,x:100}}
                transition={transition}
                whileInView={{opacity:1,x:0}}
            ></motion.div>
            <motion.img
                key={selected}
                initial={{opacity:0,x:100}}
                animate={{opacity:1,x:0}}
                transition={transition}
                exit={{opacity:0,x:-100}}
            src={testimonialsData[selected].image} alt=''/>
            <div className="arrows">
                <img 
                    onClick={()=>{
                    selected===0 ? setSelected(tLength-1)
                    : setSelected((prev) => prev-1);
                }}
                
                src={leftArrow} alt="" />
                <img 
                    onClick={()=>{
                    selected===tLength-1 ? setSelected(0)
                    : setSelected((prev) => prev+1);
                }}
                
                src={rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimoniols