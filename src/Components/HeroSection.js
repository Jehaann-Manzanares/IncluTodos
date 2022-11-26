import React from "react";
import styled from "styled-components";
import Wrapper from "../Helpers/wrapper";
import background from "../resources/herosectionbackground.svg"
import img_nina_hero from "../resources/herosectionnina.svg"

const HeroSectionStyled = styled.div`

    
   
    .hero{
        display: flex;
        justify-content: space-around;
        align-items: center;
        position:absolute;
        top:15em
        
        
    }

    .hero__text--tag{
        color:white;
        border: 1.5px white;
        padding:1em;
        background:#fbba00;
        border-radius: 30px;
    }
    .hero__title{
        font-size: 6em;
        color:white
    }
    .hero__img img{
        width: 200%;
    }

   
    .hero__btn{
        padding:1em 2.5em;
        background:none;
        border-radius: 30px;
        border:solid 2px;
        font-family: "Medium";
        color:white
    }

    .container_message{
        display:flex;
        justify-content:center;
        position: relative;
        top: -15em; 

    }
    .hero__message{
        background: #e83d59;
        border-radius: 30px;
        color: white;
        padding: .5em 3.2em;
        box-shadow: 1px;
        
    }
    .hero__message p{
        text-align: center;
        font-size: 2em;
    }
`
function HeroSection(){
    return(
    <HeroSectionStyled>
       
       <img className="hero__background"    src={background}  alt="IncluTodos"></img>   
        <Wrapper>
           
        <div className="hero">
            <div className="hero__texts">
                <span className="hero__text--tag">#inclusiva</span> 
                <h1 className="hero__title">Una app que <br></br> nos une a todos</h1>
                <button className="hero__btn">Haz cli aquí</button>
            </div>
            <figure className="hero__img">
                <img src={img_nina_hero}  alt="nina con sindrome down - inclutodos"></img>
            </figure>
        </div>
        <div className="container_message">
        <div className="hero__message">
            <p>No es la discapacidad <br></br> lo que hace dificil la vida <br></br>sino las barreras que pone la sociedad</p>
        </div>

        </div>
        </Wrapper>

    </HeroSectionStyled>
    )
}

export default HeroSection