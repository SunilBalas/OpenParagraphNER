// EntityList.js
import React from 'react';

const EntityList = ({ entities }) => {
    return (
        <div className="container mt-5">
            <h3>Entities Recognized: </h3>
            {entities.length > 0 
                ?
                    <ul className="list-group mt-3">
                        {entities.map((entity, index) => (
                            <li key={index} className="list-group-item">{entity[0]}<span className='badge badge-primary'>{entity[1]}</span></li>
                        ))}
                    </ul>
                :   <h3>No Records Found</h3>
            }
        </div>
    );
};

export default EntityList;
