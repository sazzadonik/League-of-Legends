import React from 'react';
import "./NoFound.css";
import noFoundImg from "../../Images/image-asset.jpeg";
import { Home } from '@material-ui/icons';

const NoFound = () => {
    return (
        <div className="NoFound">
            <Home className="homeIcon " onClick={() => window.location.href = "/"} />
            <h3>Looks Like You Got Lost...</h3>
            <img src={noFoundImg} alt="" />
        </div>
    );
};

export default NoFound;