import axios from "axios";

export default function addToCart(product, ammount){
	const prom = axios.post("http://localhost:5000/userProducts",{product, ammount})
	prom.then(res=>console.log("deu certo"))
	prom.catch((err=>console.log("deu errado")))
}