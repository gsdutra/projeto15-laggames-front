import axios from "axios";

const { REACT_APP_API_URL } = useContext(LagContext)

export default function addToCart(product, ammount, config){

	//console.log(config)

	const prom = axios.post(`${REACT_APP_API_URL}/userProducts`,{product, ammount}, config)
	// prom.then(res=>console.log("deu certo"))
	// prom.catch((err=>console.log("deu errado")))
}