import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import Cards from "./Components/Cards";
import Form from "./Components/Form"
function App() {
  const [search,setsearch] = useState('')

  const handlesearch =(e)=>{
    setsearch(e.target.value);
  }
  return (
    <div className="App">
     {/* <Navbar handle={handlesearch} search={search} />
     <Cards /> */}
     <Form />

     
    </div>
  );
}

export default App;
