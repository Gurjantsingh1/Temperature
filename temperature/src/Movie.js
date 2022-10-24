import React, {useState} from "react";
import './index.css';
import { FaHeart } from "react-icons/fa";
import { SlAnchor } from "react-icons/sl";
export default function Movie(props){
         const [age] = useState(2022-props.year)
    return(
        
    
        <div className="section">
            
            <hr />
            <h1> {props.title}</h1>
          <FaHeart />  <h2>{props.year}</h2>
            <h3>{props.genre}</h3>
            <h4>{props.director}</h4>
           <h5>{age}</h5> <SlAnchor /> 
            <hr />
        </div>  
        
    )
  
}
