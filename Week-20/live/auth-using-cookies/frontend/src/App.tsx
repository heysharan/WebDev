import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from '../components/signin'
import User from '../components/user'

function App() {
    return(
       <BrowserRouter>
        <Routes>
            <Route path={'/signin'} element={<Signin />}></Route>
            <Route path={'user'} element={<User />}></Route>
        </Routes>
       </BrowserRouter> 
    )
}

export default App
