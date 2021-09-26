import React, { useEffect, useState } from 'react';
import Singer from '../singer/Singer';
import './main.css';
const Main = () => {
    const[singers, setSingers] = useState([]);
    const[list, setList] = useState([]);
    
    // Fetching Data 
    useEffect(() =>{
        fetch('./singers.json')
        .then(res => res.json())
        .then(data => setSingers(data))
    }, [])

    // Add to list button function 
    const handleBudget = (singer) =>{
        const newList = [...list, singer];
        setList(newList);
    }

    // Update Total budget 
    let total = 0;
    for(const item of list){
        total = total + item.salary;
    }

    return (
        <div className="main-container">
            <div className="singers">
                {
                    singers.map(singer => <Singer
                        key = {singer.key}
                        singer={singer}
                        handleBudget = {handleBudget}
                        ></Singer>)
                }
            </div>
            <div className="budget">
                <h1>Added Singer's</h1>
                <br />
                <p>Total added: <strong>{list.length}</strong></p>
                <br />
                <br />
                <h3>Total:{total}</h3>
            </div>
        </div>
    );
};

export default Main;