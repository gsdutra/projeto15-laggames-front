import {useState, useEffect} from 'react'
import styled from 'styled-components'

const produtos = [
	{
		"productName": "xxx",
		"productId": "<id em ObjectId>",
		"ammount": "3",
		"unitaryPrice": "54.13",
		"totalPrice": "162.39",
		"productImage": "https://upload.wikimedia.org/wikipedia/pt/b/be/The_Last_of_Us_capa.png"
	},
	{
		"productName": "xxx",
		"productId": "<id em ObjectId>",
		"ammount": "3",
		"unitaryPrice": "54.13",
		"totalPrice": "162.39",
		"productImage": "https://upload.wikimedia.org/wikipedia/pt/b/be/The_Last_of_Us_capa.png"
	},
	{
		"productName": "xxx",
		"productId": "<id em ObjectId>",
		"ammount": "3",
		"unitaryPrice": "54.13",
		"totalPrice": "162.39",
		"productImage": "https://upload.wikimedia.org/wikipedia/pt/b/be/The_Last_of_Us_capa.png"
	}
]

export default function Checkout(props){
	return(<Body>
		<DetailedListing>

		</DetailedListing>

		<Brief>
		
		</Brief>
	</Body>)
}

const Body = styled.div`

`

const DetailedListing = styled.div`
	
`

const Brief = styled.div`
	
`