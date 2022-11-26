import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Cards from "./Cards";
import Wrapper from "../../Helpers/wrapper";
import data from "../../Helpers/data.json"

const ResourcesStyled = styled.div`
h2{
    font-size: 3em;
    text-align: center;
}

.Container__Resource{
    display:grid;
    grid-row-gap:1.3em;
    grid-column-gap:3em;
    grid-auto-flow: columns;
    grid-template-columns: repeat(auto-fill,23em);
    padding: 2em 1em;
    justify-content: center;
`

function Resources(){
    return(
            
            <ResourcesStyled>
                <Wrapper>
                    <h2>
                        Recursos Multimedia
                    </h2>
                    <div className="Container__Resource">
                    {
                        data.resources.map( (el)=> (

                            <Cards key={el.id} el={el}/>

                        ) )
                    }
 
                   
                    </div>
                </Wrapper>
            </ResourcesStyled>

    )
}

export default Resources