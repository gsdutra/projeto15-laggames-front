import styled from "styled-components"

export default function Footer(){
    return(
        <FooterPages>
            <h1>&copy; 2023 Laggames</h1>            
        </FooterPages>
    )
}    

const FooterPages = styled.footer`
    display: flex; 
    justify-content: center;    
    background-color: #2a2c31;
    width: 100%;
    height: 40px;
    box-shadow: 0 1px 5px black;
    padding: 0 30px;   
    position: fixed;
    bottom: 0;
    left: 0;
    h1{
        font-family: 'Montserrat', sans-serif;
        margin: 15px 0;
        font-size: 10px;
        color: #FFFFFF;
    }
`
