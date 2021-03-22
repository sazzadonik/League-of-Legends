import React from 'react';
import "./LeagueBanner.css";
import bannerDefault from "../../Images/HeaderHome.jpeg"
import { Home } from '@material-ui/icons';

const LeagueBanner = (props) => {
    const [banner, badge] = props.image
    const style = {
        backgroundImage: `url(${banner || bannerDefault})`,
        width: "100%",
        height: "45vh",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
    }
    const styleChild = {
        backgroundColor: " rgba(0, 0, 0, 0.7)",
        width: "100%",
        height: "45vh",
    }

    return (

        <div style={style} className="BannerParent">
            <div style={styleChild} className="Badge">
                <Home className="homeIcon" onClick={() => window.location.href = "/"} />
                <img src={badge} alt="" />
            </div>

        </div >

    );
};

export default LeagueBanner;