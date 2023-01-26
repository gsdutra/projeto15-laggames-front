import styled from "styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Game(){

    return(
        <>
        <Header/>
        <ContainerGame>
            <PainelGame src="https://www.psu.com/wp/wp-content/uploads/2022/06/ResidentEvil4-Remake-PS5-Wallpapers-0.jpg"/>
            <ContainerInfo>
                <h1>Resident Evil 4</h1>
                <p>Seis anos se passaram desde o desastre biológico em Raccoon City. O agente Leon S. Kennedy, um dos sobreviventes do incidente, foi enviado para resgatar a filha raptada do presidente. Ele segue o rastro dela até uma isolada vila europeia, onde há algo terrivelmente errado com os habitantes. Então a cortina se abre nessa história de um resgate ousado e um terror medonho, onde vida e morte, terror e catarse, se encontram. Com jogabilidade modernizada, uma história reimaginada e gráficos com detalhes vívidos, Resident Evil 4 marca o renascimento de um gigante da indústria. Reviva o pesadelo que revolucionou o terror de sobrevivência.</p>
                <button>Adicionar ao Carrinho</button>
            </ContainerInfo>
        </ContainerGame>
        <Footer/>
        </>
    )
}    

const ContainerGame = styled.div`
    display: flex; 
    margin: 50px 0 ;
    flex-direction: column;
`
const PainelGame = styled.img`
    width: 100%;
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