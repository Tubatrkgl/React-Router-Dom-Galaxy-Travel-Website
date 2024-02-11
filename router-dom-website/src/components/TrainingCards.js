import React from 'react'
import "./TrainingStyles.css"
import img1 from "../assets/pod.jpg"
import img2 from "../assets/moon.jpg"
import { Link } from "react-router-dom"
const TrainingCards = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Training</h1>
                <p>Lorem ipsum is placeholder
                    text commonly used in the
                    graphic, print, and publishing
                    industries for previewing layouts
                    and visual mockups.</p>
                <Link to="/contact"><button className='btn'>Contact</button></Link>
                <div className='right'>
                    <div className='img-container'>
                        <div className='image-stack top'>
                            <img src={img2} className='img' alt="" />
                        </div>
                        <div className='image-stack bottom'>
                            <img src={img1} className='img' alt="" />
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainingCards