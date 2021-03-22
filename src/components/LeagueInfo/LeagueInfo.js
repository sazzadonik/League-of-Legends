import React, { useEffect, useState } from 'react';
import "./LeagueInfo.css"
import { useParams } from 'react-router';
import LeagueBanner from '../LeagueBanner/LeagueBanner';
import LeagueDescription from '../LeagueDescription/LeagueDescription';
import Footer from '../Footer/Footer';
import LeagueIntro from '../LeagueIntro/LeagueIntro';




const LeagueInfo = () => {
    const { idLeague } = useParams();
    const [league, setLeague] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]));
    }, [idLeague]);
    const { strLeague, strBanner, strGender, intFormedYear, strCountry, strSport, strDescriptionEN, strFacebook, strTwitter, strYoutube, strBadge } = league;

    return (


        <div >
            <LeagueBanner image={[strBanner, strBadge]}></LeagueBanner>
            <div className="itemInfoParent" >

                <LeagueIntro intro={[strLeague, intFormedYear, strCountry, strSport, strGender]}></LeagueIntro>
                <LeagueDescription description={strDescriptionEN}></LeagueDescription>
                <Footer social={[strFacebook, strTwitter, strYoutube]}></Footer>
            </div>
        </div>
    );
};

export default LeagueInfo;