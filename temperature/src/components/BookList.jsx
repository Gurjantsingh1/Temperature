
import { Row, Col, Button } from "antd";
import React, {useState,useEffect} from 'react'
import '../App';

import { API_URL } from '../API';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const BookList = (props) => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
        .then((res) => {
            console.log(res.data);
            setBooks(res.data);
        })
        .catch((err) => console.log(err));

    }, []);
     const navigate = useNavigate();
  
    const handleClick = () => {
      console.log("SOmething Happened");
      props.logout();
      navigate("/login");
    };
  
    useEffect(() => {
      if(props.status){
          console.log("Authentication successfull")
      }
      else{
          navigate("/login")
      }
    }, [navigate, props.status])

  return <div className='book-list'> 
   <row className="nav">
    <nav> <br></br>
    <ul>
  <li ><a href="home">Home</a></li>
  <li ><a href="about">About</a></li>
</ul></nav><>
<br></br><br></br>
      <Row>
        <Col>
          <Button type="primary" onClick={handleClick}>
            Logout
          </Button>
        </Col>
      </Row>
    </>
    </row>
      {books.map((book)=> (
        <div key={book.id} className="book">
           <div><h2>Name:{book.name}</h2></div>
            <div><h2>Username:{book.username}</h2></div>
            <div><h2>Email:{book.email}</h2></div>
            
            
            <div><h2>Address:{book.address.street}</h2></div>
            <div><h2>Suite{book.address.suite}</h2></div>
            <div><h2>City:{book.address.city}</h2></div>
            <div><h2>ZIP{book.address.zipcode}</h2></div>
            <div><h2>Geo: Lat-{book.address.geo.lat}</h2></div>
            <div><h2>Lng-{book.address.geo.lng}</h2></div>
            <div><h2>Phone:{book.phone}</h2></div>
            <div><h2>Website:{book.website}</h2></div>
            <div><h2>Company:{book.company.name}</h2></div>
            <div><h2>CatchPhrase{book.company.catchPhrase}</h2></div>
            <div><h2>BS:{book.company.bs}</h2></div>
<br></br><br></br>



           </div>
      ))}
   </div>;
  
};

export default BookList;
