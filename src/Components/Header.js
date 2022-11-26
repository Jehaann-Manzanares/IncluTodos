import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../Helpers/wrapper";
import Logo from "../resources/logoblanco.svg"
import { useNavigate } from "react-router-dom";



const HeaderStyled = styled.div`
    font-family: "Bold";
    margin: 0 auto;
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        width:80%;
    }
    .logo{
        height: 15em;
    }
    .menu{
        display:flex;
    }
    .menu a{
        list-style: none;
        padding:2em;
        color:white;
    }

    .btns__access{
        font-family: "Medium";
    }
    .btn__login{
        background: none;
        border: none;
        font-family: "Medium";
        font-size: 1.1em;
        color:white;

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

`
function Header(){

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Login`; 
      navigate(path);
    }
    return(
        <HeaderStyled>
            <Wrapper>
                <header className="header" >
                    
                    <img className="logo" src={Logo}  alt="IncluTodos"></img>
                    <ul className="menu">
                       
                        <Link to="/Resources">Recursos</Link> 
                      
                    </ul>
                    <div className="btns__access">
                        
                        <button className="btn__signup" onClick={routeChange} >Iniciar</button>
                    </div>

                </header>
            </Wrapper>
        </HeaderStyled>
    )
}

export default Header;