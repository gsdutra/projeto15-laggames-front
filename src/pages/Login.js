import axios from "axios"
import { useState, useContext } from "react"
import { LagContext } from "../contexts/LagContext"
import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"

export default function Login() {
    const { setToken, setUserName, setUserId, setAvata, botaoLoading, inputAtivo, inputDesbotado, REACT_APP_API_URL, setTipo } = useContext(LagContext)
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [textoBotao, setTextoBotao] = useState("Entrar")
    const [desabilitado, setDesabilitado] = useState("")
    const navegacao = useNavigate()

    function logar(e) {
        e.preventDefault()
        setTextoBotao(botaoLoading) 
        setDesabilitado("disabled") 

        const body = { email, senha }
        const url = REACT_APP_API_URL + "/login"
        const promise = axios.post(url, body)
       
        promise.then((res) => {
                setToken(res.data.token)
                setUserName(res.data.name) 
                setUserId(res.data.userId)
                setAvata(res.data.avatar) 
                setTipo(res.data.type) 
                console.log("Logado com sucesso")  
                navegacao('/home')
            })

            promise.catch(err => { 
                setTextoBotao("Entrar") 
                setDesabilitado("")
                alert("E-mail ou senha inválida") 
                console.log(err.response.data)
                console.log("erro no login")                
            })
    }
    
    return (
        <LoginContainer>
            <Form onSubmit={logar}>
            <TitleBody>La<span>GG</span>ames</TitleBody>
                <Input 
                    id="email"
                    type="email"
                    placeholder="E-mail" 
                    value={email} 
                    disabled={desabilitado} 
                    corFundo={desabilitado ? inputDesbotado : inputAtivo } 
                    onChange={e => setEmail(e.target.value)} 
                    required
                />
                <Input 
                    id="senha"
                    type="password" 
                    placeholder="Senha" 
                    value={senha} 
                    disabled={desabilitado} 
                    corFundo={desabilitado ? inputDesbotado : inputAtivo } 
                    onChange={e => setSenha(e.target.value)}
                    required
                />
                <Button data-test="sign-in-submit" disabled={desabilitado} type="submit">{textoBotao}</Button> 
            </Form>
            <LinkSignUp>
                <Link to={`/cadastro`}>
                    <p>Primeira vez? Cadastre-se!</p>
                </Link>                
            </LinkSignUp>
        </LoginContainer>
    )
}
const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(45deg,#000000,#1d241c,#1b3813,#025400);
    background-size: 300% 300%;
    animation: colors 15s ease infinite;
    color:#FFFFFF;
        @keyframes colors{
            0%{
                background-position: 0% 50%;
            }
            50%{
                background-position: 100% 50%; 
            }
            100%{
                background-position: 0% 50%;
            }
}
    
    
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
    span{       
        color: #4fa94d;
    }
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
const LinkSignUp = styled.div`
    margin-top: 20px;    
   p{    
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
   }
   a{
        text-decoration: none;
   }
`