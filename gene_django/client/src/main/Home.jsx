import React from 'react';
import Sequence from '../components/Sequence';
import { useState } from 'react';
import User from './User';



export default function Home() {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    

    

    
  return(
   <div>
       <p>hello page two</p>
    <Sequence/>   
  </div>
  )}
