import "./App.css";
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import BookList from "./components/BookList";
import Login from "./components/Login";
import { useState } from "react";
function App() {
  const [status, setStatus] = useState(false);

  const authenticate = ()=>{
    setStatus(true)
  }

  const logout = ()=>{
    setStatus(false)
  }

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login auth={authenticate}/>} />
        <Route path="/home" element={<Home logout={logout} status={status}/>} />
        <Route path="/booklist" element={<BookList logout={logout} status={status}/>} />
        <Route path="/about" element={<About logout={logout} status={status}/>} />
      </Routes>
    </div>
  );




/*  return (
    <div className="App">
   
      <Routes>
        <Route path="/" element={<BookList />} />
      
      </Routes>
   
    </div>
  );*/
}

export default App;


 /* const movieList= [
    {
      title:"The Godfather",
      year:"1972",
      genre:"Drama",
      director:"Francis Ford Capolla"
    },
    {
      title:"Superbad",
      year:"2007",
      genre:"Comedy",
      director:"Greg Mottola"
    },
    {
      title:"The Departed",
      year:"2006",
      genre:"Drama",
      director:"Martin Scorsese"
    },
    {
      title:"Saving Private Ryan",
      year:"1998",
      genre:"Action",
      director:"Steven Spielberg"
    },
    {
      title:"The Expendables",
      year:"2010",
      genre:"Action",
      director:"Sylvester Stallone"
    }
    ]
  
  return (
    <div className="App">
               <h1>Movies information</h1>
               {movieList.map(
                (movieObj)=>{return(<Movie title={movieObj.title} year={movieObj.year} genre={movieObj.genre} director={movieObj.director} age={movieObj.age}/>)}
               )}
        */
 
