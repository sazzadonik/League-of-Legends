import React from 'react';
import "./LeagueDescription.css"
const LeagueDescription = (props) => {
    const description = props.description;
    return (
        <div className="Description">
            <p>
                {description}
            </p>
        </div>
    );
};

export default LeagueDescription;