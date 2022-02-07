import {Route , Routes} from 'react-router-dom'
import Home from './main/Home'
import User from './main/User'


function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<User/>}/>
       <Route path="/geneseq" element={<Home/>}/>  
     </Routes>
    </div>
  );
}

export default App;
