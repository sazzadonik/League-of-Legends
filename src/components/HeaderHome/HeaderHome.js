import { Home } from '@material-ui/icons';
import React from 'react';
import "./HeaderHome.css";
const HeaderHome = () => {
    return (
        <div className="HomeHeader">
            <div className="color-div">
                <Home className="homeIcon" onClick={() => window.location.href = "/"} />
                <h3>League of Legends</h3>

            </div>
        </div>
    );
};

export default HeaderHome;