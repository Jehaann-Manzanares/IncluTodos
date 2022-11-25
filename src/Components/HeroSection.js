import React from "react";
import styled from "styled-components";
import Wrapper from "../Helpers/wrapper";
import background from "../resources/herosectionbackground.svg"

const HeroSectionStyled = styled.div`

`
function HeroSection(){
    return(
    <HeroSectionStyled>
        <img className="logo" src={background}  alt="IncluTodos"></img>
        <Wrapper>
        
        </Wrapper> 
    </HeroSectionStyled>
    )
}

export default HeroSection