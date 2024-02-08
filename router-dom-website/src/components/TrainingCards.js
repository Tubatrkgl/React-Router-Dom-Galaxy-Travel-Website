import React from 'react'
import "./TrainingStyles.css"
import img1 from "../assets/pexels-pixabay-41162.jpg"
import img2 from "../assets/pexels-spacex-586056.jpg"
// import img3 from "../assets"
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
                        
                            <img src={img2} className='img' alt="" />
                       
                        
                            <img src={img1} className='img' alt="" />
                       
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainingCards