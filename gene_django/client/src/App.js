import {Route , Routes} from 'react-router-dom'
import Home from './main/Home'
import User from './main/User'
import Mutation from './components/Mutation';


function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/user" element={<User/>}/>
       <Route path="/mutation/:id" element={<Mutation/>}/>   
     </Routes>
    </div>
  );
}

export default App;
