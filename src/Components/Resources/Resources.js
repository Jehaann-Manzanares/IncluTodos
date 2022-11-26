import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Cards from "./Cards";
import Wrapper from "../../Helpers/wrapper";

const ResourcesStyled = styled.div`
h2{
    font-size: 3em;
    text-align: center;
}
`

function Resources(){
    return(
            
            <ResourcesStyled>
                <Wrapper>
                    <h2>
                        Recursos Multimedia
                    </h2>
                    <Cards></Cards>
                </Wrapper>
            </ResourcesStyled>

    )
}

export default Resources