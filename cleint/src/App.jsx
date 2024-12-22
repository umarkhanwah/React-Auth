
import Home from './pages/home';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import AddNote from './pages/AddNote';
import UserState from './context/UserState';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {


  return (
    <UserState>
        <BrowserRouter>
        

          <Header />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/SignIn' element={<SignIn />}/>
              <Route path='/SignUp' element={<SignUp />}/>
              <Route path='/addNote' element={<AddNote />}/>
            </Routes>
      

        </BrowserRouter>
    </UserState>
  )
}

export default App
