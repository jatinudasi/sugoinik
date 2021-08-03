import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import Cards from "./Components/Cards";
import Form from "./Components/Form"

import {
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [search,setsearch] = useState('')

  const handlesearch =(e)=>{
    setsearch(e.target.value);
    console.log('search value',search)
  }
  return (
    <div className="App">
     <Navbar handle={handlesearch} search={search} />
      {/* <Cards />
      <Form /> */}
      <Switch>
          <Route exact path="/">
          <Cards search={search}/>
          </Route>
          <Route path="/add">
          <Form />
          </Route>
        </Switch>
     
    </div>
  );
}

export default App;
