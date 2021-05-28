import React, { Component } from 'react';
import './index.css';

class Links extends Component {
    render() {
        return (
            <div className="links_container">
                <div className="link_header">
                    <img id="logo" src="https://i.imgur.com/DjARgfX.png" alt="logo" />
                </div>
                <div className="link_section">
                    <a className="hyper" href="https://calendly.com/itsdevinci/meeting" target="_blank" rel="noopener noreferrer"><button className="link_button">Schedule Time With Me</button></a>
                    <a className="hyper" href="https://itsdevinci.com/" target="_blank" rel="noopener noreferrer"><button className="link_button">Portfolio</button></a>
                    <a className="hyper" href="https://opensea.io/accounts/itsdevinci" target="_blank" rel="noopener noreferrer"><button className="link_button">NFTs</button></a>

                </div>
                <div className="icon_holder">
                    <a className="hyper" href="https://www.instagram.com/itsdevincicode/" target="_blank" rel="noopener noreferrer"><img className="icon" src="https://i.imgur.com/aFbzi27.png" alt="gram" /></a>
                    <a className="hyper" href="https://www.youtube.com/user/ThunderKatz100" target="_blank" rel="noopener noreferrer"><img className="icon" src="https://i.imgur.com/eCBuQRQ.png" alt="yt" /></a>
                    <a className="hyper" href="https://www.twitch.tv/thedevincicode" target="_blank" rel="noopener noreferrer"><img className="icon" src="https://i.imgur.com/t868YiR.png" alt="yt" /></a>
                </div>
            </div>
        );
    }
}

export default Links;