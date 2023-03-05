import React from 'react';
import './CSS/MatchList.css'

const MatchList = ({data}) => {
    return <div className="MatchList-container">
        {
            data.map(d => <div className="card">
                <div className="dp">
                    <img src={d.image}/>
                </div>
                <div className="match-info">
                    <label>{d.name}</label>
                    <h4>{d.age}</h4>
                </div>
            </div>)
        }
    </div>
}

export default MatchList