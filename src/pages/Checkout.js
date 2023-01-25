import {useState, useEffect} from 'react'
import styled from 'styled-components'

const produtos = {
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

export default function Checkout(props){

	const emReal = (valor) => (Number(valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));

	return(<Body>
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
			
			<Footer>
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
			</Footer>
		</Brief>
	</Body>)
}

const Body = styled.div`
	display: flex;
	padding: 7%;
`

const Footer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	margin: 10px;
	font-size: 16px;
	text-align: right;
	line-height: 20px;

	button{
		border: none;
		border-radius: 10px;
		font-size: 16px;
		margin-top: 8px;
		padding: 8px;
		background: #121212;
		color: #bacada;
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

	color: #ddeebb;
	font-size: 26px;

	background: #333333;
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