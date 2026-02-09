import { NavBar } from "./components/NavBar";
import { Routes, Route} from "react-router-dom";
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';


function App() {

  return (

    
    <>  
        <NavBar/>
        <Routes>
          <Route path= "/dashboard" element={ <Dashboard/>}   />
          <Route path= "/" element={ <Home/>}   />
        </Routes> 
      
    </>
  )
}

export default App
