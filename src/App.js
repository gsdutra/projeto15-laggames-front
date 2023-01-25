import {useState, useEffect} from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import UserContext from './contexts/UserContext.js';

function App() {

	const [token, setToken] = useState("")

	return (
		<div className="App">
			<UserContext.Provider value={{token, setToken}}>
				
			</UserContext.Provider>
		</div>
	);
}

export default App;
