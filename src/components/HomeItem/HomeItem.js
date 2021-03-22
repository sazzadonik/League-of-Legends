import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./HomeItem.css"
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from "react-router-dom";


const HomeItem = (props) => {
    const { strLeague, strSport, idLeague } = props.league;
    const [badge, setBadge] = useState();
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBadge(data.leagues[0].strBadge));
    }, [idLeague]);

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));
    return (

        <Grid item xs={12} sm={6} md={4} lg={4}>
            <Paper className={useStyles.paper}>
                <img className="badge" src={badge} alt="" />
                <p className="titleLeague">{strLeague}</p>
                <h5 className="sportsType">Soprts Type: {strSport}</h5>
                <br></br>
                <Link to={"/league/" + idLeague}>
                    <Button variant="contained" color="primary">
                        Explore <ArrowForwardIcon />
                    </Button>
                </Link>
            </Paper>
        </Grid>


    );
};

export default HomeItem;