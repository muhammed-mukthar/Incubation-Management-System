import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import NavAdmin from './NavAdmin'
import ProgressBar from "@ramonak/react-progress-bar";
import { adminUrl } from "../../constants/constant";
function Track() {
    const [errorMessage, setErrorMessage] = useState('')
    const [forms, setForms] = useState([])
  
      useEffect(()=>{
          Axios.get(`${adminUrl}/approved`).then((response) => {
            console.log(response);
          if (response.data) {
            setForms(response.data.info)
          } else {
            setErrorMessage('Something went wrong')
          }
        }).catch((err) => {
          console.log(err);
          setErrorMessage('Something went wrong')
        })
      },[])
      


    return (
        <div>
          <NavAdmin />
          <div className="flex flex-col relative text-white h-screen bg-blue-800 justify-center items-center">
            <h1 className="text-3xl text-center mb-9 ">Track</h1>
            
<div class="overflow-x-auto w-full md:w-1/2  relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                  SI No
                </th>
                <th scope="col" class="py-3 px-6">
                   Company
                </th>
                <th scope="col" class="py-3 px-6">
                  Status
                </th>
              
            </tr>
        </thead>
        <tbody>
            {forms && forms.map((form,index)=>{
            return <tr key={form._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {index+1}
                </th>
                <td class="py-4 px-6">
                    {form.company_name}
                </td>
               {form.isBooked ? <td class="py-4 px-6">
                <ProgressBar completed={100} customLabel="Approved" />
                </td>:
                <td class="py-4 px-6">
                <ProgressBar completed={50} customLabel="Processing" />
                </td>
                }
                
            </tr>})}
           
        </tbody>
    </table>
</div>

          </div>
        </div>
    )
    }
export default Track