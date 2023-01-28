import styled from "styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"
import axios from "axios"
import { LagContext } from "../contexts/LagContext"
import { useEffect, useContext, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

import addToCart from "../functions/addToCart.js"
import Confirmation from "../components/Confirmation"

export default function Game(){
    const { idGame, game, setGame, load } = useContext(LagContext)
    const navigate = useNavigate()

    const [showAdd, setShowAdd] = useState(false)

    useEffect(() => {        
        const REACT_APP_API_URL = `http://localhost:5000/game/${idGame}` 
            const url = REACT_APP_API_URL     
            const promise = axios.get(url) 

            promise.then(res => {  
                setGame(res.data)           
            }) 

            promise.catch((err) => {
                console.log(err)
            })        
    }, [])

    function pageHome(){       
        setGame(undefined)
        navigate("/home")       
    }

    function addToCartFunc(product, ammount){
        addToCart(product, ammount)
        setShowAdd(true)
        setTimeout(()=>setShowAdd(false), 1500)
    }

    if(game === undefined) {
        return <Load>{load}</Load>;
    }
    
    return(
        <>
        <Header/>
        <ContainerGame>        
            <PainelGame src={game.cape}/>
            <ContainerInfo>
                <h1>{game.title}</h1>
                <p>{game.description}</p>
                <ContainerButtons>  
                    <button onClick={()=>addToCartFunc(game._id, 1)}>Adicionar ao Carrinho</button>
                    <button onClick={()=>(pageHome())}>Voltar para home</button>                     
                </ContainerButtons>
            </ContainerInfo>           
        </ContainerGame>
        {showAdd?<Confirmation/>:<></>}
        <Footer/>
        </>
    )
}    

const Load = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 20px;
`
const ContainerGame = styled.div`
    display: flex; 
    margin: 50px 0 ;
    flex-direction: column;
`
const PainelGame = styled.img` 
    width: 100%; 
    height: 250px; 
    object-fit: cover;
    box-shadow: 0 1px 5px black;
`
const ContainerInfo = styled.div`
    margin: 20px;
    h1{
        font-family: 'Kanit', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        color: #FFFFFF;
    }
    p{
        font-family: 'Kanit', sans-serif;
        font-style: normal;
        font-size: 16px;
        color: #FFFFFF;
        margin: 10px 0;
    }
    button{
        background-color: #4fa94d;
        width: 300px;
        height: 50px;
        border: none;
        border-radius: 50px;
        margin: 10px 0;
        font-family: 'Kanit', sans-serif;
        font-style: normal;
        font-size: 20px;
        color: #FFFFFF;
        box-shadow: 0 1px 5px black;
    }
`
const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    button:first-child{
        background-color: #4fa94d;
        border: none;
        border-radius: 50px;
        width: 300px;
        height: 50px;
        font-weight: 700;
        margin: 5px 5px 10px;
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        text-decoration: none;
        font-family: 'Kanit', sans-serif;
        font-style: normal;
        font-size: 20px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 1px 5px black;
        cursor: pointer;
    }
    button:last-child{
        background-color: #db3636;
        border: none;
        border-radius: 50px;
        width: 300px;
        height: 50px;
        font-weight: 700;
        margin: 5px 5px 10px;
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        text-decoration: none;
        padding: 10px;
        font-family: 'Kanit', sans-serif;
        font-style: normal;
        font-size: 20px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 1px 5px black;
        cursor: pointer;
    }
    button:hover{
        background-color: #a3e0a1;
        color: #000000;
    }
    button:active{
        background-color: #FFFFFF;
        color: #000000;
    }
`