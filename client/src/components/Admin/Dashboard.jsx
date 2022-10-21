import React,{useContext,useState,useEffect} from 'react'
import Axios from 'axios';
import NavAdmin from './NavAdmin'
import {useNavigate} from 'react-router-dom'
import { AdminRequest } from "../../constants/constant";
import Modal from 'react-modal'
import { ApplicationContext } from '../../context/ApplicationContext'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '40rem',
        height: '36rem',
        backgroundColor: '#CECECE',
        border: 'none'
    },
    overlay: {
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
};




function Dashboard() {
    const navigate=useNavigate()
    Modal.setAppElement('#root')
    const [modal, setModal] = useState(false)
    const { applications, setApplications } = useContext(ApplicationContext)
    const [forms, setForms]=useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [modalItem, setModalItem] = useState({})
    const [status, setStatus] = useState('')
    


    useEffect(() => {
        AdminRequest.get(`applications`).then((response) => {
            console.log(response);
            if (response.data) {
                const { data } = response
                setApplications(data)
                setForms(data)
            } else if(response.data.authError){
                navigate('/admin')
            } else{
                setErrorMessage('Something went wrong')
            }
        }).catch((err) => {
            console.log(err);
            setErrorMessage('Something went wrong')
        })
    }, [status])
    
    function handlePending(item, e) {
        e.preventDefault()
        AdminRequest.get(`/pending/${item._id}`).then((response) => {
            if (response.data) {
                setStatus(new Date())
            } else {
                setErrorMessage('Something went wrong')
            }
    
        }).catch((err) => {
            setErrorMessage(err)
    
        })
    }
    
    function handleApprove(item){
        AdminRequest.get(`/approve/${item._id}`).then((response) => {
            if (response.data) {
                setStatus(new Date())
            } else {
                setErrorMessage('Something went wrong')
            }
        }).catch((err) => {
            setErrorMessage(err)
    
        })
    }
    
    function handleDeclined(item){
        AdminRequest.get(`/decline/${item._id}`).then((response) => {
            if (response.data) {
                setStatus(new Date())
            } else {
                setErrorMessage('Something went wrong')
            }
        }).catch((err) => {
            setErrorMessage(err)
    
        })
    }
    
    function openModal(item) {
        setModalItem(item)
        setModal(true)
    }
    

  return (
    <div>
         <Modal isOpen={modal} onRequestClose={() => { setModal(false) }} style={customStyles}>
                <p className='text-end'><i onClick={() => { setModal(false) }} className="fa-solid fa-x  "></i></p>
                <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Details of {modalItem.company_name}</label>
                <div className='flex flex-col justify-start border-gray-400'>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Customer Name: </p>
                        <p>-  {modalItem.name} </p>
                    </div>
                        <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Email: </p>
                        <p>-  {modalItem.email} </p>
                    </div>
                        <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Phone: </p>
                        <p>- {modalItem.phone} </p>
                    </div>
                        <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Place: </p>
                        <p>- {modalItem.city}, {modalItem.state} </p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Team and background: </p>
                        <p>- {modalItem.team_and_bg}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Company and products: </p>
                        <p>- {modalItem.company_and_products}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Problem to be solved: </p>
                        <p>- {modalItem.problem}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Unique solution: </p>
                        <p>- {modalItem.solution}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Value proposition: </p>
                        <p>- {modalItem.value_proposition}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Competitors and advantage: </p>
                        <p>- {modalItem.competitive_advantage}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Revenue model: </p>
                        <p>- {modalItem.revenue_model}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Market size of the product: </p>
                        <p>- {modalItem.market_size}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Plan for marketing: </p>
                        <p>- {modalItem.market_plan}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Type of Incubation needed: </p>
                        <p>- {modalItem.incubation_type}</p>
                    </div>
                    <div className='flex flex-wrap mb-1'>
                        <p className='font-semibold'>Bussiness proposal: </p>
                        <p>- {modalItem.proposal}</p>
                    </div>
                </div>
            </Modal>
        <NavAdmin/>
        <div className= 'flex justify-center flex-col overflow-x-auto relative text-white items-center  h-screen bg-blue-500'>

           
<div class="overflow-x-auto relative pt-28  sm:rounded-lg">
    <h1 className='text-2xl text-center text-amber-50 font-bold'>New requests </h1>
    <table class="w text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                  Si No
                </th>
                <th scope="col" class="py-3 px-6">
                Company Name
                </th> <th scope="col" class="py-3 px-6">
                   Open request
                </th>
                <th scope="col" class="py-3 px-6">
                   change status
                </th>
                
            </tr>
        </thead>
        <tbody>

            {   forms.map((obj, index) => {
                                    if(!obj.isPending){
               return <tr key={obj._id} class="bg-white border-b dark:bg-gray-800 text-center dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900  whitespace-nowrap dark:text-white">
                {index + 1}
                </th>
                <td class="py-4 px-6">
                {obj.company_name}
                </td>
                
                <td class="py-4 px-6 text-center  ">

                    <button class="font-medium text-amber-600 dark:text-amber-500 hover:underline"  onClick={() => openModal(obj)}>show</button>
                    </td>
                    <td class="py-4 px-6 text-center ">
                    <button  class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => handlePending(obj, e)} >pending</button>
                </td>
            </tr>}
            })
        }
           
        </tbody>
    </table>


</div>

<div className='mt-12 '>
<div class="overflow-x-auto relative pt-28  sm:rounded-lg">
    <h1 className='text-2xl text-center text-amber-50 font-bold'>Pending requests </h1>
    <table class="w text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Index
                </th>
                <th scope="col" class="py-3 px-6">
                   Company Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Company Details
                </th>
                <th scope="col" class="py-3 px-6">
                    
                </th>
                <th scope="col" class="py-3 px-6">
                    <span class="sr-only"></span>
                </th>
                <th scope="col" class="py-3 px-6">
                    <span class="sr-only"></span>
                </th>
            </tr>
        </thead>
        <tbody>
       
            { forms.map((obj, index) => {
                                    if(obj.isPending){   
                                        return  ( <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
             <td class="py-4 px-6">
             {index + 1}
                </td>
                <td class="py-4 px-6">
                {obj.company_name}
                </td>
                <td class="py-4 px-6">
                Products and services: {obj.company_and_products}
                </td>
                <td class="py-4 px-6">
                <button className="px-2 py-1 text-white font-medium rounded bg-blue-900" onClick={() => { openModal(obj) }}>Open</button>
                </td>
              { obj.isDeclined?  <td class="py-4 px-6 text-right">
                    <p class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Declined</p>
                </td>:(obj.isApproved?
                <td class="py-4 px-6 text-right">
                <p class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Approved</p>
            </td>:<td class="py-4 px-6 text-right">
                    <button onClick={()=>{handleApprove(obj)}} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Approve</button>
                </td>)
                                    
            }
               {obj.isDeclined? <td className=' py-4 px-6 text-right' ><p  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> DECLINED</p></td>:
                                      (obj.isApproved? <td ><p class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> Approved</p></td>:
                                      <td className=' py-4 px-6 text-right'><button onClick={()=>{handleDeclined(obj)}} className="px-2 py-1 text-white font-medium rounded bg-red-600" >Decline</button></td>                           
                                      )}
            </tr>)}})}
        
        </tbody>
    </table>
</div>

</div>

        </div>
    </div>
  )
}

export default Dashboard