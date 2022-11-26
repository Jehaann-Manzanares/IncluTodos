import React from "react";
import styled from "styled-components";


const VideoSectionStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .Video{
        
    }

    iframe{
        border-radius: 30px;
    }

    .phrasevideo{
        font-size:3em;
        font-weight: bold;
        text-align:center;
        color:#6e368c
    }
`

const Vframe= {

   video1: '<iframe width="1280px" height="720px" src="https://www.youtube.com/embed/K9BKULI4KUg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>',

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
            <div className="phrasevideo">
                <p>Trabajemos para que la inclusión deje <br></br>
                de ser un sueño y se convierta en<br></br> 
                una realidad.</p>
            </div>
        </VideoSectionStyled>
    )
}

export default videoSection