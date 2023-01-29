import styled from "styled-components";

export default function Confirmation(props){
	return(
		<Conf>
			<p>Item adicionado ao carrinho</p>
		</Conf>
	)
}

const Conf = styled.div`
	position: fixed;
	bottom: 70px;
	right: 70px;
	width: 300px;
	height: 60px;
	background: white;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 28px;
	font-family: 'Kanit', sans-serif;
	font-size: 18px;
`