import { useEffect, useContext, useState } from "react"
import { LagContext } from "../contexts/LagContext"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"
import axios from "axios"
import Confirmation from "../components/Confirmation"

export default function Home(){
    const { token, products, setProducts, load, setIdGame, REACT_APP_API_URL, tipo, count, setCount } = useContext(LagContext) 
    const [showAdd, setShowAdd] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const config = { headers: { Authorization: `Bearer ${token}` } }
        const url = REACT_APP_API_URL + "/games"    

        const promise = axios.get(url, config) 

        promise.then(res => {          
            setProducts(res.data)            
        }) 

        promise.catch((err) => {
            alert(err.response.data)
            console.log(err.message)
            console.log("erro no home")
            navigate("/")
        })        
    }, [count])

    function addToCartFunc(product, ammount){
        const config = { headers: { Authorization: `Bearer ${token}` } }
        const prom = axios.post(`${REACT_APP_API_URL}/userProducts`,{product, ammount}, config)

        setShowAdd(true)
        setTimeout(()=>setShowAdd(false), 1500)
    }

    function gameUnid(id){
        setIdGame(id)
        setProducts(undefined)
        navigate("/game")       
    }

    function deleteGame(id, title){  
        if(window.confirm(`Deletar Jogo ${title}?`)) {
            const url = `${REACT_APP_API_URL}/deleteGame/${id}` 
            const promise = axios.delete(url) 

            promise.then(res => {  
                console.log("jogo deletado")
                setCount(count+1)              
            }) 

            promise.catch((err) => {
                console.log(err)
            }) 
        }        
    }

    if(products === undefined) {
        return <Load>{load}</Load>;
    }

    return(
        <>
        <Header/> 
        {tipo === "admin" ?
            <AdvertisingGG>
                <h1>ADMINISTRADOR DO SISTEMA LOGADO</h1>
                <p>Como essa conta o admin pode excluir qualquer game com o bot??o da lixeira (<ion-icon name="trash-sharp"></ion-icon>) 
                e adicionar game com o bot??o (<ion-icon name="add-circle-outline"></ion-icon>) do cabe??alho</p> 
            </AdvertisingGG> 
            : 
            <AdvertisingGG>
                <h1>OFERTAS IMPERD??VEIS</h1>
                <p>Jogue mais, pague menos. Descubra agora ofertas incr??veis nos melhores jogos</p> 
            </AdvertisingGG>
        } 
        <ContainerHome>
            <ContainerGames>
                {products.map((p) => (
                    <GameUnid key={p._id}>
                        <div>
                            <img src={p.cape} alt="Capa"/>
                        </div>
                        <h1>{p.title}</h1>
                        <p>R$ {p.value},00</p>
                        <ContainerButtons>   
                            <button onClick={() => gameUnid(p._id)}>Mais detalhes</button>
                            {tipo === "admin" ?                             
                                <button onClick={() => deleteGame(p._id, p.title)}><ion-icon name="trash-sharp"></ion-icon></button> 
                                : 
                                <button onClick={() => addToCartFunc(p._id, 1)}><ion-icon name="cart-outline"></ion-icon></button> 
                            }             
                        </ContainerButtons>
                    </GameUnid>
                ))}
            </ContainerGames>
        </ContainerHome>
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
const AdvertisingGG = styled.header`
    margin: 50px 0 1px;
    font-family: 'Kanit', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    background-color: #FFFFFF;
    width: 100%;
    height: 80px;
    box-shadow: 0 1px 5px black;
    padding: 0 20px;
    h1{
        font-size: 20px;
        color: #000000; 
    }
    p{       
        color: #4fa94d;
        font-size: 10px;
    }
`
const ContainerHome = styled.div`
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    display: flex; 
`
const ContainerGames = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin-bottom: 50px;
`
const GameUnid = styled.div`
    width: 150px;
    color: white;
    background-color: #2a2c31;
    margin: 5px;
    border-radius: 5px;
    box-shadow: 0 1px 5px black;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 100%;      
        height: 80px; 
        object-fit: cover;
    }
    h1{
        font-family: 'Kanit', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        color: #FFFFFF;
        margin: 10px;
      
        height: 30px;
        padding: auto;
    }
    p{
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        color: #FFFFFF;
        margin: 10px;
    }
`
const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;
    button:first-child{
        background-color: #4fa94d;
        border: none;
        border-radius: 50px;
        width: 75%;
        height: 35px;
        font-weight: 700;
        margin: 5px 5px 10px;
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        text-decoration: none;
        color: #000000;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    button:last-child{
        background-color: #db3636;
        border: none;
        border-radius: 50px;
        width: 25%;
        height: 35px;
        font-weight: 700;
        margin: 5px 5px 10px;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        padding: 10px;
        color: #000000;
        cursor: pointer;
    }
    button:hover{
        background-color: #a3e0a1;
    }
    button:active{
        background-color: #FFFFFF;
    }
`
