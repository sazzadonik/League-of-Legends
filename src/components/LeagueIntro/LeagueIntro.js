import React from 'react';
import "./LeagueIntro.css";
import MaleImg from "../../Images/male.png";
import FemaleImg from "../../Images/female.png";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { EmojiFlagsOutlined, LocationOnOutlined, SportsSoccerOutlined, WcOutlined } from '@material-ui/icons';

const LeagueIntro = (props) => {
    const [strLeague, intFormedYear, strCountry, strSport, strGender] = props.intro;

    return (
        <div className="introCard">
            <Grid className="GridInfo" container spacing={0}>
                <Grid className="GridItem" item xs={12} sm={6} md={6} lg={6}>
                    <Paper className="ItemContainer">
                        <h3>{strLeague}</h3>
                        <p> <LocationOnOutlined /><i> Founded:</i> <strong> {intFormedYear}</strong></p>
                        <p> <EmojiFlagsOutlined /> <i>Country:</i> <strong>{strCountry}</strong></p>
                        <p> <SportsSoccerOutlined /> <i>Sport Type:</i> <strong>{strSport}</strong></p>
                        <p> <WcOutlined /> <i>Gender:</i> <strong>{strGender}</strong></p>
                    </Paper>
                </Grid>

                <Grid className="GridItem" item xs={12} sm={6} md={6} lg={6}>
                    <Paper className="ItemContainer" >
                        {
                            strGender === "Male" ? <img src={MaleImg} alt="" /> : <img src={FemaleImg} alt="" />
                        }
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default LeagueIntro;