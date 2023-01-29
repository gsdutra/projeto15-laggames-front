import axios from "axios";

export default function addToCart(product, ammount, config){

	//console.log(config)

	const prom = axios.post("http://localhost:5000/userProducts",{product, ammount}, config)
	// prom.then(res=>console.log("deu certo"))
	// prom.catch((err=>console.log("deu errado")))
}