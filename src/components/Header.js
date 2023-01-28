import styled from "styled-components"
import { useNavigate, Link } from "react-router-dom"
import { useContext } from "react"
import { LagContext } from "../contexts/LagContext"
import axios from "axios"

export default function Header(){
    const { token, avata, REACT_APP_API_URL, userName, tipo, setGame } = useContext(LagContext)
    const navigate = useNavigate()

    function carrinho(){
        navigate("/cart")
    }

    function logout(){
        const url = REACT_APP_API_URL + `/logout/${token}`   
        const promise = axios.delete(url) 

        promise.then(res => {  
            setGame(undefined)
            navigate("/")   
            alert("Usuario deslogado")           
        }) 

        promise.catch((err) => {
            console.log(err)
        })               
    }

    return(
        <HeaderPages>
            <h1 onClick={()=>navigate("/home")}>La<span>GG</span>ames</h1>
            <HeaderUser>                 
                <h2>Olá, {userName}</h2>               
                <img src={avata} alt="Logo TrackIt"/> 
                {tipo === "admin" ? <ion-icon onClick={()=> navigate("/cadastrogames")} name="add-circle-outline"></ion-icon> : ""}               
                <ion-icon onClick={()=>carrinho()} name="cart-outline"></ion-icon>
                <ion-icon onClick={()=>logout()} name="log-out-outline"></ion-icon>
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
        cursor: pointer;  
             
    }
    h2{
        font-family: 'Kanit', sans-serif;
        font-size: 12px;
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