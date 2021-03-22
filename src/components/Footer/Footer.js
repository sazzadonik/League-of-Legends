import React from 'react';
import "./Footer.css";
import { Facebook, Twitter, YouTube } from '@material-ui/icons';



const Footer = (props) => {
    const [facebook, twitter, youtube] = props.social;
    const handleUrl = (url) => window.open(`https://${url}`);

    return (
        <div>
            <div>
                <Facebook className="Facebook" onClick={() => handleUrl(facebook || "fb.com")} />
                <YouTube className="Youtube" onClick={() => handleUrl(youtube || "youtube.com")} />
                <Twitter className="Twitter" onClick={() => handleUrl(twitter || "twitter.com")} />
            </div>
        </div>
    );
};

export default Footer;