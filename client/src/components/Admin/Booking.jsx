import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import Axios from 'axios';
import NavAdmin from './NavAdmin';
import { adminUrl } from "../../constants/constant";



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
  const [modal, setModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [forms, setForms] = useState([])
  const [selected, setselected] = useState('')
  const [indexof, setIndex] = useState({})

  const A = [], B = [], C = [], D = [], E = [], F = []
  for (let i = 1; i <= 10; i++) {
    A.push({ name: 'A', slot: 'A' + i, isBooked: false })
    B.push({ name: 'B', slot: 'B' + i, isBooked: false })
    C.push({ name: 'C', slot: 'C' + i, isBooked: false })
    D.push({ name: 'D', slot: 'D' + i, isBooked: false })
    E.push({ name: 'E', slot: 'E' + i, isBooked: false })
    F.push({ name: 'F', slot: 'F' + i, isBooked: false })
  }

  const [slotA, setSlotA] = useState(A)
  const [slotB, setSlotB] = useState(B)
  const [slotC, setSlotC] = useState(C)
  const [slotD, setSlotD] = useState(D)
  const [slotE, setSlotE] = useState(E)
  const [slotF, setSlotF] = useState(F)

  useEffect(() => {
    Axios.get(`${adminUrl}/slots`).then((response) => {
      if (response.data) {
        setSlotA(response.data.A)
        setSlotB(response.data.B)
        setSlotC(response.data.C)
        setSlotD(response.data.D)
        setSlotE(response.data.E)
        setSlotF(response.data.F)
      } else {
  
      }
      Axios.get(`${adminUrl}/approved`).then((response) => {
        console.log(response.data,'jsdfkhjfsdjhfdhj');
        if (response.data) {
          setForms(response.data.info)
        } else {
          setErrorMessage('Something went wrong f')
        }
      }).catch((err) => {
        console.log(err);
        setErrorMessage('Something went wrong e')
      })
    }).catch((err) => {
      console.log(err);
      setErrorMessage('Something went wrong d')
    })
    
  }, [])



  function handleCompany() {
    if (selected === 0) {
      setModal(false)
      setErrorMessage('company is not selected c')
    } else {
      console.log(selected);
      Axios.post(`${adminUrl}/booking/${selected}`, indexof).then((response) => {
        if (response.data) {
          console.log(indexof,'mukthar');
          let { val, index } = indexof
          val[index].isBooked = true
          setModal(false)
        } else {
          setErrorMessage('Something went wrong a')
        }
      }).catch((err) => {
        console.log(err);
        setErrorMessage('Something went wrong b')
      })
    }
  }

  return (
    <>
    
      <Modal isOpen={modal} onRequestClose={() => { setModal(false) }} style={customStyles}>
        <p className='text-end'><i onClick={() => { setModal(false) }} className="fa-solid fa-x  "></i></p>
        <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Select a company</label>
        <select id="countries" name='company' onChange={ (e) => { if (e.target.value !== 0) { setselected(e.target.value) } else { setModal(false) } }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected value={0} >Choose a company</option>
          {forms.map((item) => {
            if (item.isBooked === false) { return <option key={item._id} value={item._id}>{item.company_name}</option> }
          })}
        </select>
        <button onClick={(handleCompany)} className='bg-blue-900 border border-gray-300 text-white px-2 py-1 rounded m-1'>Submit</button>
      </Modal>
      <NavAdmin/>
      <div className= 'flex justify-center flex-col overflow-x-auto relative text-white items-center  h-screen bg-blue-500'>
      <div className='flex flex-col text-white justify-center items-center  mt-24 '>
        <h1 className='text-3xl text-purple-600 font-bold'>Booking <span className='text-white'>slots</span></h1>
        <h3 className='text-xl text-center'>select the below slots to register the company</h3>
        {errorMessage && <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert"> {errorMessage}</div>}
      </div>
      <div className='h-full'>
        <div className='flex  flex-col justify-center items-center m-5'>
          <div className="flex flex-wrap flex-row justify-center items-center gap-4 border-b-2 border-500 pb-5">
            <Slots values={slotA} setModal={setModal} setIndex={setIndex} forms={forms} />
          </div>

          <div className='flex flex-row flex-wrap justify-center items-center'>
            <div className="grid grid-cols-2 gap-4 mt-5 px-3 border-r-2 border-500">
              <Slots values={slotB} setModal={setModal} setIndex={setIndex} forms={forms} />
            </div>

            <div className="grid grid-cols-2 gap-4  mt-5 px-3 border-r-2 border-500">
              <Slots values={slotC} setModal={setModal} setIndex={setIndex} forms={forms} />
            </div>

            <div className="grid grid-cols-2 gap-4  mt-5 px-3 border-r-2 border-500">
              <Slots values={slotD} setModal={setModal} setIndex={setIndex} forms={forms} />
            </div>

            <div className="grid grid-cols-2 gap-4  mt-5 px-3 border-r-2 border-500">
              <Slots values={slotE} setModal={setModal} setIndex={setIndex} forms={forms} />
            </div>

            <div className="grid grid-cols-2 gap-4  mt-5 px-3 border-r-2 border-500">
              <Slots values={slotF} setModal={setModal} setIndex={setIndex} forms={forms} />
            </div>

          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Booking

const Slots = ({ values, setModal, setIndex, forms }) => {
  const [val, setVal] = useState(values)
  let slotArr = []
  forms.filter(element => {
    if (element.isBooked) {
      slotArr.push(element.slotId)
    }
  });
  return (
    <>
      {val.map((slotObj, index) => {
        if (slotObj.isBooked || slotArr.includes(slotObj.slot)) return <div key={slotObj.slot} className='w-16 h-16 bg-gray-500'></div>;
        else return <div key={slotObj.slot} onClick={(e) => {
          setModal(true)
          setIndex({ val: val, index: index })
        }} className='w-16 h-16 bg-red-500 hover:bg-red-900'></div>;
      })}
    </>
  );
}


