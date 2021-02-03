import React, { Component } from 'react';
import './index.css';

class Links extends Component {
    render() {
        return (
            <div className="links_container">
               <div className="link_header">
                <img id="logo" src="https://i.imgur.com/nW7leHl.png" alt="logo" />
                </div>
                <div className="link_section">
                <a className="hyper" href="https://www.gofundme.com/f/3w6gud-isaiahs-recovery-fund?utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all&utm_source=customer" target="_blank" rel="noopener noreferrer"><button className="link_button">Isaiah's Recovery Fund</button></a>
                <a className="hyper" href="https://itsdevinci.com/" target="_blank" rel="noopener noreferrer"><button className="link_button">Portfolio</button></a>
                
                </div>
                <div className="icon_holder">
                    <a className="hyper" href="https://www.instagram.com/itsdevincicode/" target="_blank" rel="noopener noreferrer"><img className="icon" src="https://i.imgur.com/Mh6hMce.png" alt="gram" /></a>
                    <a className="hyper" href="https://www.youtube.com/user/ThunderKatz100" target="_blank" rel="noopener noreferrer"><img className="icon" src="https://i.imgur.com/cwPgXmK.png" alt="yt" /></a>
                </div>
            </div>
        );
    }
}

export default Links;