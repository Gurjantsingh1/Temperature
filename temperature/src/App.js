
import './App.css';
//import Temperature from './Temperature';
//<Temperature />
import Movie from './Movie';

function App() {
  const movieList= [
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
        
    </div>
  );
}

export default App;
