import styled from "styled-components"
import { useNavigate, Link } from "react-router-dom"

export default function Header(){
    const navigate = useNavigate()

    function carrinho(){
        navigate("/checkout")
    }

    return(
        <HeaderPages>
            <h1>La<span>GG</span>ames</h1>
            <HeaderUser>
            <img src="https://conteudo.imguol.com.br/c/entretenimento/d2/2018/05/10/god-of-war---ps4---modo-de-fotografia-1525965576844_v2_3x4.jpg" alt="Logo TrackIt"/>
            <ion-icon onClick={()=>carrinho()} name="cart-outline"></ion-icon>
            <ion-icon name="log-out-outline"></ion-icon>
            </HeaderUser>
        </HeaderPages>
    )
}    

const HeaderPages = styled.header`
    display: flex; 
    z-index: 99;
    align-items: center;
    justify-content: space-between;
    background-color: #2a2c31;
    width: 100%;
    height: 50px;
    box-shadow: 0 1px 5px black;
    padding: 0 30px;
    position: fixed;
    top: 0;
    left: 0;
    h1{
        font-family: 'Press Start 2P', cursive;
        font-size: 20px;
        color: #FFFFFF;   
             
    }
    span{       
        color: #4fa94d;
    }
`
const HeaderUser = styled.div`
    display: flex; 
    align-items: center;
    img{
        width: 25px;
        height: 25px;
        border-radius: 98.5px;
        margin: 0 5px;
    }
    ion-icon{
        color: #FFFFFF;
        font-size: 20px;
        padding: 0 5px;
        cursor: pointer;
    }
    ion-icon:hover{
        color: #4fa94d;
    }

`
