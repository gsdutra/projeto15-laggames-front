import {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from "../components/Header"
import Footer from "../components/Footer"

const produtost = {
	"total": "4.7",
	"items": [
	{
		"productName": "banana",
		"productId": "<id em ObjectId>",
		"ammount": "3",
		"unitaryPrice": "54.13",
		"totalPrice": "162.39",
		"productImage": "https://upload.wikimedia.org/wikipedia/pt/b/be/The_Last_of_Us_capa.png"
	},
	{
		"productName": "massam",
		"productId": "<id em ObjectId>",
		"ammount": "3",
		"unitaryPrice": "54.13",
		"totalPrice": "162.39",
		"productImage": "https://upload.wikimedia.org/wikipedia/pt/b/be/The_Last_of_Us_capa.png"
	},
	{
		"productName": "peirax",
		"productId": "<id em ObjectId>",
		"ammount": "3",
		"unitaryPrice": "54.13",
		"totalPrice": "162.39",
		"productImage": "https://upload.wikimedia.org/wikipedia/pt/b/be/The_Last_of_Us_capa.png"
	}
]}

export default function Cart(props){

	const [produtos, setProdutos] = useState({items: [], total: 0})

	useEffect(()=>{
		const promisse = axios.get("http://localhost:5000/userProducts")

		promisse.then((res)=> setProdutos(res.data)).catch((err)=>console.log(err))
	},[])

	const emReal = (valor) => (Number(valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));

	return(
		<>
        	<Header/>
			<Body>
				<Brief>
					<p>Resumo</p>
					<p Style="font-size: 16px">Verifique seus itens:</p>
					<Separator/>
						<BriefList>
							{produtos.items.map((elem,index)=>
								<>
								{index!==0?<Separator/>:<></>}
									<Items>
									<JustifyItems>
										<img src={elem.productImage}/>
										<ItemsInner>
											{elem.productName}<br/>
											<div>
												<br/>
												Preço unitário: {emReal(elem.unitaryPrice)}<br/>
												Quantidade: {elem.ammount}
											</div>
										</ItemsInner>
									</JustifyItems>
										<div Style="font-size: 18px">{emReal(elem.totalPrice)}
										</div>
								</Items>
							</>
							)}
						</BriefList>

						<Separator/>
						
						<FooterCart>
							<div>
								<div>
									Preço total:
									<div Style="font-size: 20px">{emReal(produtos.total)}
										</div>
								</div>
								<button>
									Continuar
								</button>
							</div>
						</FooterCart>
				</Brief>
			</Body>
			<Footer/>
        </>
		)
}

const Body = styled.div`
	display: flex;
	padding: 7%;
`

const FooterCart = styled.div`
	display: flex;
	flex-direction: row-reverse;
	margin: 10px;
	font-size: 16px;
	text-align: right;
	line-height: 20px;

	button{
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
	button:hover{
        background-color: #a3e0a1;
        color: #000000;
    }
    button:active{
        background-color: #FFFFFF;
        color: #000000;
    }
`

const JustifyItems = styled.div`
	display: flex;
`

const Items = styled.div`
	display: flex;
	justify-content: space-between;

	margin-top: 4px;
	margin-bottom: 4px;
	img{
		width: 70px;
		height: 70px;
		object-fit: cover;
		border-radius: 10px;
		align-self: center;
	}
	
`

const ItemsInner = styled.div`
	margin-left: 10px;
	div{
		font-size: 15px;
	}
`

const Brief = styled.div`
	font-family: 'Kanit', sans-serif;

	color: #ddeebb;
	font-size: 26px;

	background: #2a2c31;
	border-radius: 15px;
	width: 100%;

	p{
		margin-top: 6px;
		margin-bottom: 6px;
		margin-left: 10px;
	}
`
const BriefList = styled.div`
	margin-top: 6px;
	margin-bottom: 6px;
	margin-left: 10px;
	margin-right: 10px;
`

const Separator = styled.div`
	width: 100%;
	height: 1px;
	background: #00000030;
`