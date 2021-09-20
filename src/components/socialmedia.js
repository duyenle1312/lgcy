import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function SocialFollow() {
    return (
        <div
            style={{ jusity: "center", textAlign: "center", width: "100%" }}
        >
            
            <div
                style={{ margin: "0 auto" }}
            >
                <SocialIcon url="https://twitter.com/official_lgcy" fgColor="white" style={{ height: 40, width: 40, marginRight: "0.7%" }} />
                <SocialIcon url="https://www.instagram.com/lgcy.official" fgColor="white" style={{ height: 40, width: 40, marginRight: "0.7%" }} />                
                <SocialIcon url="https://www.tiktok.com/@lgcyofficial" fgColor="white" style={{ height: 40, width: 40, marginRight: "0.7%" }} />
                <SocialIcon url="https://discord.com/invite/RQvXqFqMnJ" fgColor="white" style={{ height: 40, width: 40, marginRight: "0.7%" }} />
		<SocialIcon url="https://www.youtube.com/channel/UCqPa9JXCZmI_jTl7bjNt1BA" fgColor="white" style={{ height: 40, width: 40, marginRight: "0.7%" }} />
            </div>
        </div>
    );
}