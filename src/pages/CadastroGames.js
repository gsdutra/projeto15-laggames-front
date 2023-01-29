import { useState, useContext } from "react"
import { LagContext } from "../contexts/LagContext"
import styled from "styled-components"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Cadastro() {
    const { botaoLoading, inputAtivo, inputDesbotado, REACT_APP_API_URL } = useContext(LagContext)
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [valor, setValor] = useState("")
    const [capa, setCapa] = useState("")
    const [textoBotao, setTextoBotao] = useState("Cadastrar")
    const [desabilitado, setDesabilitado] = useState("")
    const navigate = useNavigate()

    function cadastrarGame(e) {
        e.preventDefault()
        setTextoBotao(botaoLoading) 
        setDesabilitado("disabled")

        const body = { titulo, descricao, valor, capa }        
        const url = REACT_APP_API_URL + "/cadastroGame" 
        const promise = axios.post(url, body)

        promise.then((res) => { 
            alert("Cadastro de game realizado!")
            navigate("/home") 
        })

        promise.catch(err => { 
            setTextoBotao("Cadastrar") 
            setDesabilitado("")            
            alert(err.response.data) 
            console.log(err)          
        })
    }

    return (
        <>
        <Header/>
        <CadastroContainer>
            <Form onSubmit={cadastrarGame}>
            <TitleBody>Cadastro Game</TitleBody>
                <Input 
                    id="titulo"
                    type="text" 
                    placeholder="Titulo" 
                    value={titulo} 
                    onChange={e => setTitulo(e.target.value)} 
                    disabled={desabilitado}
                    corFundo={desabilitado ? inputDesbotado : inputAtivo }
                    required
                />
                <Input 
                    id="descricao"
                    type="text" 
                    placeholder="Descrição"
                    value={descricao} 
                    onChange={e => setDescricao(e.target.value)} 
                    disabled={desabilitado}
                    corFundo={desabilitado ? inputDesbotado : inputAtivo }
                    required 
                />
                <Input 
                    id="valor"
                    type="text"
                    placeholder="valor" 
                    value={valor} 
                    onChange={e => setValor(e.target.value)}
                    disabled={desabilitado}
                    corFundo={desabilitado ? inputDesbotado : inputAtivo }
                    required 
                />
                <Input 
                    id="capa"
                    type="url" 
                    placeholder="Capa" 
                    value={capa} 
                    onChange={e => setCapa(e.target.value)}
                    disabled={desabilitado}
                    corFundo={desabilitado ? inputDesbotado : inputAtivo }
                    required 
                />
                <Button data-test="sign-in-submit" disabled={desabilitado} type="submit">{textoBotao}</Button> 
            </Form>            
        </CadastroContainer>
        <Footer/>
        </>
    )    
}

const CadastroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color:#FFFFFF;    
    p{
        text-align: center;
        color: #FFFFFF;
    }
`
const TitleBody = styled.h1`
    font-family: 'Press Start 2P', cursive;
    font-size: 20px;
    font-style: normal;   
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
`
const Form = styled.form`
    display: flex;   
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`
const Input = styled.input`
    box-sizing: border-box;
    width: 326px;
    height: 58px;
    background-color: ${props => props.corFundo};
    border: none;
    border-radius: 5px;
    margin: 5px 0;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    padding-left: 10px;
    ::placeholder{        
        color: #000000;    
    }
`
const Button = styled.button`
    width: 326px;
    height: 46px;
    background-color: #4fa94d;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
    cursor: pointer;
`