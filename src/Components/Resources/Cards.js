import React from "react";
import styled from "styled-components";
import imgnina from "../../resources/imagenninos_calltoaction.png"
import Wrapper from "../../Helpers/wrapper";

const CardsStyled = styled.div`
    .Card{
        weight: 24em;
        width: 20em;
        background: #fbba00;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
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
    }
`
function Card(props){
    return(
        <Wrapper>
            <CardsStyled>
                <article className="Card">
                    <img className="Card__img" src={imgnina} />
                    <h3 className="Card__title" >{props.title} Terapia para ninos con autismos</h3>
                    <button className="Card__btn">Ver</button>
                </article>
            </CardsStyled>
        </Wrapper>
    )
}

export default Card