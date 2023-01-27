import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navegacao = useNavigate()
    function logar(e) {
        e.preventDefault()
        const login = { email, senha }
        axios.post(process.env.REACT_APP_API_URL + "/login", login)
            .then(res => {
                console.log(res.data)/*token*/
                navegacao('/home')

            })
            .catch(err => console.log(err.response.data))
    }
    return <LoginContainer>
        <Form onSubmit={logar}>
            <p>Login</p>
            <Input type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
            <Input type="text" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
            <Input type="submit" value="Entrar" />
        </Form>
    </LoginContainer>
}
const LoginContainer = styled.div`
    color:#FFFFFF;
    background-color: #382e2e;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content:center;
    align-items:center;
    p{
        text-align: center;
        color: #FFFFFF;
    }
`
const Form = styled.form`
    width: 300px;
    height:140px;
    background-color:gray;
    display: flex;
    flex-direction: column;
    gap:10px;
    padding:10px;
    border-radius: 4px;
`
const Input = styled.input`
 outline:none;
 border-radius:4px;
`