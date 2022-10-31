import React from "react"
import PropTypes from "prop-types"

const YoutubeEmbed = ({ embedId }) => {
    return (
        <div>
           <iframe 
           width='640' 
           height='390'
           src= {`https://youtube.com/embed/${embedId}`}
           frameBorder='0'
           allow="accelerometer; autoplay"
           allowFullScreen
           title="Embed Youtube Video"></iframe>
        </div>
    );
        // YoutubeEmbed.prototype = {
        //     embedId:PropTypes.string.isRequired
        // }

}

export default YoutubeEmbed;
