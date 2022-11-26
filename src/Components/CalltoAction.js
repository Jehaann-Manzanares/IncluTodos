import React from "react";
import styled from "styled-components";
import imgnina from "../resources/imagenninos_calltoaction.png"
import Wrapper from "../Helpers/wrapper";

const CalltoActionStyled = styled.div`
    margin-top: 3em;

    .call__container{
        display:flex;
    
    }

    .text{
      
        font-size:3em;
        color:black;
        width:30%
        font-weight: bold;
        
    }

    .text p{
      
        font-weight: bold;
        
    }

    .btn__signup{

    margin-left: 4em;
    border-radius: 30px;
    background: #e83d59;
    padding: 1.5em 3.5em;
    border: none;
    color: white;
    font-family: "Medium";
    } 
    figure{
        width:70%
    }
    img{
        width: 100%;  
        height: auto;
    }
`

function CalltoAction(){
    return(
    <CalltoActionStyled>
        <Wrapper>
        <div className="call__container">
            <div className="text">
                <p>Únete a nuestra comunidad</p>
                <button className="btn__signup">Registrarse</button>
            </div>
            <figure>
                <img className="img" src={imgnina}></img>
            </figure>

        </div>

        </Wrapper>
    </CalltoActionStyled>
    )
}

export default CalltoAction