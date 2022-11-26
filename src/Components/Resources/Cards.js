import React from "react";
import styled from "styled-components";
import img from "../../resources/imagenninos_calltoaction.png"

import Wrapper from "../../Helpers/wrapper";

const rutaimg = "../../resources/"
const CardsStyled = styled.div`
    .Card{
        weight: 24em;
        width: 20em;
        background: #fbba00;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:2em 1.2em;
    }
    .Card__title{
        font-size:1.5em;
        text-align:center;
    }
    .Card__img{
        width: 100%;
        height: 17em;

    }
    .Card__btn{

        background: none;
        border: none;
        font-size: 1.2em;
        font-weight: bold;
        color:white
    }
`
function Card(props){
    return(
        <Wrapper>
            <CardsStyled>
                <article className="Card">
                    <img className="Card__img" src={img}/>
                    <h3 className="Card__title" >{props.el.name}</h3>
                    <button className="Card__btn">Ver</button>
                </article>
            </CardsStyled>
        </Wrapper>
    )
}

export default Card