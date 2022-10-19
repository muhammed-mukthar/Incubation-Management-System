
import NAV from "../components/nav";

import React, { useEffect, useState } from 'react'

import axios from 'axios'
import {userUrl} from '../constants/constant'
import { useNavigate } from 'react-router-dom'

import { decodeToken } from 'react-jwt'
function Form() {
  const navigate = useNavigate()
    const token = localStorage.getItem('userToken')
    const user= decodeToken(token)
    // console.log(user.id);
    useEffect(() => {
        if (token) {
            if (!user) {
                localStorage.removeItem('UserToken')
                navigate('/')
            } else {
                console.log(user);
            }
        }
    }, [])

    

    const initialValues = {
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        phone: '',
         company_name: "",
    team_and_bg: "",
    company_and_products: "",
    problem: "",
    solution: "",
    value_proposition: "",
    revenue_model: "",
    market_size: "",
    market_plan: "",
    incubation_type: "",
    proposal: ""
    }
    const [formValues, setFormvalues] = useState(initialValues)
    const [formError, setFormError] = useState()
    const [logo, setLogo] = useState()

    const handleImage = (e) => {
        setLogo(e.target.files[0])

    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormvalues({ ...formValues, [name]: value })
        // console.log(formValues)
    }
    const handleSubmit = () => {
        if (!logo || formValues.name === '' || formValues.email === '' || formValues.address === '' || formValues.city === '' || formValues.state === '' || formValues.phoneno === '' || formValues.companyname === '' ||
            formValues.teamandbackground === '' || formValues.companyandproduct === '' || formValues.problem === '' || formValues.solution === '' || formValues.valueproposition === '' || formValues.competators === '' || formValues.revenue === '' ||
            formValues.potentialmarketsize === '' || formValues.plan === '' || formValues.type === '' || formValues.businessproposal === '') {
            setFormError('enter all the required fields')
        } else {
            const data = new FormData()
            console.log("qwerty")
            data.append("logo", logo)
            data.append("data", JSON.stringify(formValues))
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }

            axios.post(`${userUrl}/formSubmit/${user.id}`, data, config, token).then((response) => {
                console.log(response);
    navigate('/processing')
            }).catch((err) => {
                console.log('error')
            })
        }
    }
  return (
    <div className="bg-gray-500 h">
      <NAV />
      <div className="container flex justify-center mx-auto ">
        <div className=" lg:h-1/2 w-10/12 lg:w-2/3 mt-14 p-3">
          <div>
            <h1 className="text-center text-3xl">Register Form</h1>
          </div>
          <div>
            <form>
              <div className="flex space-x-2">
                <div className="mb-6 w-1/2">
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                  Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    id="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder=""
                    required=""
                  />
                </div>
                <div className="mb-6  w-1/2">
                  <label
                    for="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Address*
                    
                  </label>
                  <input
                  name="address"
                  onChange={handleChange}
                    type="text"
                    id="address"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required=""
                  />
                </div>
              </div>


              <div className="flex space-x-2">
                <div className="mb-6 w-1/2">
                  <label
                    for="city"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                   City*
                  </label>
                  <input
                      name='city'
                      type="text"
                      onChange={handleChange}
                    id="city"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder=""
                    required=""
                  />
                </div>
                <div className="mb-6  w-1/2">
                  <label
                    for="state"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    State*
                  </label>
                  <input
                   name='state'
                   type="text"
                   onChange={handleChange}
                    id="state"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required=""
                  />
                </div>
              </div>

              <div className="flex space-x-2">
                <div className="mb-6 w-1/2">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                   Email*
                  </label>
                  <input
                     name='email'
                     type="email"
                     onChange={handleChange}
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder=""
                    required=""
                  />
                </div>
                <div className="mb-6  w-1/2">
                  <label
                    for="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Phone*
                  </label>
                  <input
                type="number"
                name='phoneno'
                onChange={handleChange}
                    id="phone"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required=""
                  />
                </div>
              </div>

              <div className="flex space-x-2">
                <div className="mb-6 w-1/2">
                  <label
                    for="company"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                   Company Name*
                  </label>
                  <input
                    type="text"
                    name='companyname'
                        onChange={handleChange}
                    id="company"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder=""
                    required=""
                  />
                </div>
                <div className="mb-6  w-1/2">
                  <label
                    for="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Image*
                  </label>
                  <input
                    type="file"
                    id="image"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required=""
                  />
                </div>
              </div>
              <div className="flex flex-col ">
      <div className="mb-6">
<label for="background" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Describe the Team and Background*</label>
<textarea id="background" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
        </div>          
        <div className="mb-6">
<label for="product" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Describe your company and Products*</label>
<textarea id="product" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
        </div>    
        <div className="mb-6">
<label for="problem" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Describe the problem you are trying to solve*</label>
<textarea id="problem" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
        </div>  
        <div className="mb-6">
<label for="solution" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">What is unique about your solution?*</label>
<textarea id="solution" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
        </div> 
        <div className="mb-6">
<label for="proposition" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">What is your value proposition for the customer?*</label>
<textarea id="proposition" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
        </div>   
        <div className="mb-6">
<label for="competitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Who are your competitors and what is your competative advantage ?*</label>
<textarea id="competitors" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
        </div>     
        <div className="mb-6">
<label for="revenue" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">what is your revenue model ?*</label>
<textarea id="revenue" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
        </div>  
        <div className="mb-6">
<label for="marketsize" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">what is the potential market size of the product ?*</label>
<textarea id="marketsize" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
        </div>
        <div className="mb-6">
<label for="marketing" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">How do you market or plan to market your products and services*</label>
<textarea id="marketing" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
        </div>
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Types of Incubation needed</label>
<div className="flex items-center pl-4 rounded  dark:border-gray-700">
    <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="bordered-radio-1" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Physical Incubation</label>
</div>
<div class="flex items-center pl-4 rounded dark:border-gray-700">
    <input checked="" id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="bordered-radio-2" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Physical Incubation</label>
</div>
        </div>

        <div className="mb-6">
<label for="proposal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Upload a detailed buissness proposal*</label>
<textarea id="proposal" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
        </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-9  "
              >
                Submit  
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
