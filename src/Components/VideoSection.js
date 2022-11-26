import React from "react";
import styled from "styled-components";


const VideoSectionStyled = styled.div`
    display: flex;
    justify-content: center;
    .Video{
        d
    }

    iframe{
        border-radius: 30px;
    }
`

const Vframe= {

   video1: '<iframe width="560px" height="315px" src="https://www.youtube.com/embed/K9BKULI4KUg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>',

}


function Iframe(props) {
    return (
      <div className="Video"
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }

function videoSection(){
    return(
        <VideoSectionStyled>
            <div >
                <Iframe iframe={Vframe["video1"]} allow="autoplay" />
            </div>
            
        </VideoSectionStyled>
    )
}

export default videoSection