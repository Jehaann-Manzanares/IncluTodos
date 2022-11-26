import React from "react";
import styled from "styled-components";
import Wrapper from "../Helpers/wrapper";
import Logo from "../resources/logoblanco.svg"


const HeaderStyled = styled.div`
    font-family: "Bold";
    margin: 0 auto;
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
    }
    .logo{
        height: 15em;
    }
    .menu{
        display:flex;
    }
    .menu li{
        list-style: none;
        padding:2em;
    }

    .btns__access{
        font-family: "Medium";
    }
    .btn__login{
        background: none;
        border: none;
        font-family: "Medium";
        font-size: 1.1em;

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
    return(
        <HeaderStyled>
            <Wrapper>
                <header className="header" >
                    
                    <img className="logo" src={Logo}  alt="IncluTodos"></img>
                    <ul className="menu">
                        <li>Soluciones</li>
                        <li>Recursos</li>
                        <li>Precios</li>
                        <li>Paginas</li>
                    </ul>
                    <div className="btns__access">
                        <button className="btn__login">Iniciar</button>
                        <button className="btn__signup">Registrarse</button>
                    </div>

                </header>
            </Wrapper>
        </HeaderStyled>
    )
}

export default Header;