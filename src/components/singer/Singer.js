import React from 'react';
import './singer.css'
const Singer = (props) => {
    // console.log(props.singer.name)
    const {name, age, genres, country, img, salary} = props.singer;
    return (
        <div className="singer-card">
            <img className="singer-img" src={img} alt="" />
            <h2>Name: {name}</h2> 
            <h3>Genres: {genres}</h3>
            <p><strong>Age:</strong> {age} <strong>Country:</strong> {country}</p>
            <h3>Budget: ${salary}</h3>
            <button onClick={()=>props.handleBudget(props.singer)} className="add-list-btn">Add to List</button>
        </div>
    );
};

export default Singer;