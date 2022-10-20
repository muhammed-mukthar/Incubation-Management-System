
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import Axios from 'axios';
import NavAdmin from './NavAdmin';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '17rem',
    height: '12rem',
    backgroundColor: '#CECECE',
    border: 'none'
  },
  overlay: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
};

function Booking() {
  Modal.setAppElement('#root')
  const [modal,setModal]=useState(false)
  const [errorMessage,setErrorMessage]=useState('')
  
  return (
    
    <div>
      <NavAdmin/>
      
      
      </div>
  )
}

export default Booking



