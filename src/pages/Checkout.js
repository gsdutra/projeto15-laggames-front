import styled from "styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useNavigate, Link } from "react-router-dom"

export default function Checkout(){
    const navigate = useNavigate()

    setTimeout(() => {
        navigate("/home")  
    }, 5000);
    
    return(
        <>
            <Header/>
                <ContainerHome>
                    <h1>Obrigado pela Compra</h1>
                </ContainerHome>
            <Footer/>
        </>
                
    )
} 

const ContainerHome = styled.div`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex; 
    height: 100vh;
    h1{
        font-family: 'Kanit', sans-serif;
        font-size: 40px;
        font-weight: 700;
        color: #FFFFFF;
    }
`