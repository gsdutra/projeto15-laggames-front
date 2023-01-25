import { useEffect, useContext, useState } from "react"
import { LagContext } from "../contexts/LagContext"
//import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"
//import axios from "axios"

export default function Home(){
    const { products, load } = useContext(LagContext)

    if(products === undefined) {
        return <Load>{load}</Load>;
    }

    return(
        <ContainerHome>
            <GameUnid>

            </GameUnid>
        </ContainerHome>

    )
}    

const ContainerHome = styled.div`
    margin-top: 50px;
    display: flex;   
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
    //background-color: white;
`
const Load = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 20px;
`
const GameUnid = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 20px;
`