import React from "react";
import styled from "styled-components";
import imglogin from "../resources/login.jpg"

const LoginStyled = styled.div`
 
        display: flex;
        justify-content: center;
        align-items: center;
    
    
`

function Login(){
    return(
        <LoginStyled className="login">
            <img src={imglogin} alt="tipos de usuarios"/>
        </LoginStyled>
    )
}

export default Login