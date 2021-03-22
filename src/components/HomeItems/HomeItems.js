import React, { useEffect, useState } from 'react';
import "./HomeItems.css";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HomeItem from '../HomeItem/HomeItem';

const HomeItems = () => {
    const [leagues, setLeagues] = useState([]);
    const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
    useEffect(
        () => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    const fisrtFifty = data.leagues.slice(0, 21);
                    setLeagues(fisrtFifty)
                })
        }, []);


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
        <div className="ItemsContainer">
            <div className={useStyles.root}>
                <Grid container spacing={3}>
                    {
                        leagues.map(league => <HomeItem league={league} key={league.idLeague}></HomeItem>)
                    }
                </Grid>
            </div>
        </div>
    );
};

export default HomeItems;