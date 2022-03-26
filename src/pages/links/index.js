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
                    <a className="hyper" href="https://drive.google.com/file/d/1QEgBFYfpQKludRks1X9wKQO23YiwlVub/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="link_button">Resume</button></a>
                    <a className="hyper" href="https://opensea.io/accounts/itsdevinci" target="_blank" rel="noopener noreferrer"><button className="link_button">NFTs</button></a>
                    <a className="hyper" href="https://forms.gle/QbdmX6wmixnCavHAA" target="_blank" rel="noopener noreferrer"><button className="link_button">XR Interest Form</button></a>

                </div>
                <div className="icon_holder">
                    <a id="insta" className="hyper" href="https://www.instagram.com/thedevincicode/" target="_blank" rel="noopener noreferrer"><img className="icon" src="https://i.imgur.com/aFbzi27.png" alt="gram" /></a>
                    <a id="yt" className="hyper" href="https://www.youtube.com/channel/UCdWMwP8ynch1I0fkgTZUrLw" target="_blank" rel="noopener noreferrer"><img className="icon" src="https://i.imgur.com/eCBuQRQ.png" alt="yt" /></a>
                    <a id="twitch" className="hyper" href="https://www.twitch.tv/thedevincicode" target="_blank" rel="noopener noreferrer"><img className="icon" src="https://i.imgur.com/t868YiR.png" alt="t" /></a>
                </div>
            </div>
        );
    }
}

export default Links;