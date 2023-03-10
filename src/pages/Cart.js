import {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { LagContext } from "../contexts/LagContext"

export default function Cart(props){

	const {REACT_APP_API_URL, token} = useContext(LagContext)

	const nav = useNavigate()

	const [produtos, setProdutos] = useState({items: [], total: 0})

	const [refresh, setRefresh] = useState(0)

	const config = {
		headers: {
			"Authorization": `Bearer ${token}`
		}
	}

	function changeItemAmmount(productId, ammount){
		const prom = axios.put(`${REACT_APP_API_URL}/userProducts/${productId}`,{ammount}, config)
		prom.then(()=>setRefresh(refresh+1))
	}

	function deleteItem(productId){
		const prom = axios.delete(`${REACT_APP_API_URL}/userProducts/${productId}`, config)
		prom.then(()=>setRefresh(refresh+1))
	}

	useEffect(()=>{
		const promisse = axios.get(`${REACT_APP_API_URL}/userProducts`, config)

		promisse.then((res)=> (
			(res.data && res.data !== 'Carrinho vazio')? setProdutos(res.data) : console.log()
			))

		promisse.catch((err) => {
			alert("Desconectado. Faça login novamente.")
			console.log(err)
			nav("/")
		})     
	},[refresh])

	const emReal = (valor) => (Number(valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));

	return(
		<>
        	<Header/>
			<Body>
				{produtos.items.length>0?
					<Brief>
						<p>Carrinho</p>
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
													<AlignItems>
														Quantidade: {elem.ammount}
														<ion-icon onClick={()=>changeItemAmmount(elem.productId, elem.ammount-1)} name="remove-circle-outline"></ion-icon>
														<ion-icon onClick={()=>changeItemAmmount(elem.productId, elem.ammount+1)} name="add-circle-outline"></ion-icon>
													</AlignItems>
												</div>
											</ItemsInner>
										</JustifyItems>
											<PriceAndTrash>
												{emReal(elem.totalPrice)}
												<Trash>
													<br/>
												<ion-icon onClick={()=>deleteItem(elem.productId)} name="trash-sharp"></ion-icon>
												</Trash>
											</PriceAndTrash>
									</Items>
								</>
								)}
							</BriefList>

							<Separator/>
							
							<FooterCart>
								<div>
									<div>
										Preço total:
										<div Style="font-size: 20px">{emReal(produtos.total)}</div>										 
									</div>									  
								</div>								
							</FooterCart>
							<ContainerButtons>   
								<button onClick={()=>nav('/home')}>
									Continuar comprando
								</button>
								<button onClick={()=>nav('/checkout')}>
									Finalizar compra									
								</button>
							</ContainerButtons>
					</Brief>
					:
					<Brief>
						<br/>
							<p>Seu carrinho está vazio</p>
						<br/>
					</Brief>
				}
			</Body>
			<Footer/>
        </>
		)
}

const Body = styled.div`
	display: flex;
	padding: 7%;
	padding-top: 72px;
`
const AlignItems = styled.div`
	display: flex;
	align-items: center;
	ion-icon{
		margin-left: 10px;
		color: white;

		transition: .2s;
		&:hover{
			transform: scale(1.1);
			transition: .2s;
			cursor: pointer;
		}
	}
`
const PriceAndTrash = styled.div`
	font-size: 18px;
`
const Trash = styled.div`
	font-size: 22px;
	color: red;
	text-align: right;

	transition: .2s;
		&:hover{
			transform: scale(1.08);
			transition: .2s;
			cursor: pointer;
		}
`
const FooterCart = styled.div`
	display: flex;
	flex-direction: row-reverse;
	margin: 10px;
	font-size: 16px;
	text-align: right;
	line-height: 20px;
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
const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
	button{
        border: none;
        border-radius: 50px;
        width: 40%;
        height: 55px;
        font-weight: 700;
        margin: 5px 5px 10px;
        font-family: 'Kanit', sans-serif;
		font-size: 15px;
        text-decoration: none;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;		
        cursor: pointer;
    }
    button:first-child{
        background-color: #4fa94d;
    }
    button:last-child{
        background-color: #db3636;
    }
    button:hover{
        background-color: #a3e0a1;
    }
    button:active{
        background-color: #FFFFFF;
    }
`