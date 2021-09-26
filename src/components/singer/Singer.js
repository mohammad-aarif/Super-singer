import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import './singer.css'
const Singer = (props) => {
    const {name, age, genres, country, img, salary} = props.singer;
    return (
        <div className="singer-card">
            <img className="singer-img" src={img} alt="" />
            <h2>Name: {name}</h2> 
            <h3>Genres: {genres}</h3>
            <p><strong>Age:</strong> {age} <strong>Country:</strong> {country}</p>
            <h3>Budget: ${salary}</h3>
            <button onClick={()=>props.handleBudget(props.singer)} className="add-list-btn"><FontAwesomeIcon icon={faUserPlus} /> Add to List</button>
            <div className="social-icons">
            <FontAwesomeIcon className="icon" icon={faFacebook} /> 
            <FontAwesomeIcon className="icon" icon={faInstagram} /> 
            <FontAwesomeIcon className="icon" icon={faGithub} />
            </div>
        </div>
    );
};

export default Singer;