import { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Cadastro() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmaSenha, setConfirmaSenha] = useState("")
    const [avatar, setAvatar] = useState("")

    const navegacao = useNavigate()
    function cadastrarUsuario(e) {
        e.preventDefault()
        const usuario = { nome, email, senha, confirmaSenha, avatar }
        axios.post(process.env.REACT_APP_API_URL+'/cadastro',usuario)
        .then(res=>navegacao('/'))
        .catch(err=> console.log(err.response.data))
    }
    return <CadastroContainer>
        <Form onSubmit={cadastrarUsuario}>
            <p>Cadastro</p>
            <Input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
            <Input type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
            <Input type="text" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
            <Input type="text" placeholder="Confirme a senha" value={confirmaSenha} onChange={e => setConfirmaSenha(e.target.value)} />
            <Input type="text" placeholder="URL do avatar" value={avatar} onChange={e => setAvatar(e.target.value)} />
            <ButtonSubmit type="submit" value="Cadastrar" ></ButtonSubmit>
        </Form>
    </CadastroContainer>
}

const CadastroContainer = styled.div`
color:#FFFFFF;
background-color: #382e2e;
width: 100vw;
height: 100vh;
display: flex;
justify-content:center;
align-items:center;
`
const Form = styled.form`
    width:300px;
    height:240px;
    background-color:gray;
    display: flex;
    flex-direction: column;
    gap:10px;
    padding:10px;
    border-radius: 4px;
    p{
        text-align: center;
        color: #FFFFFF;
    }
`
const Input = styled.input`
    outline:none;
    border-radius: 4px;

`
const ButtonSubmit = styled.input`

`

