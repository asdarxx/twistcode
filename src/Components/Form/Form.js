import React, { useEffect, useState } from 'react'
import './Form.css'
import PrivacyNote from '../PrivacyNote/PrivasyNote'
import { getCountries } from '../../Service/Service'
import { useDispatch, useSelector } from 'react-redux'
import { setCountries } from '../../Redux/Action/CountriesAction'


function Form() {
    const dispatch =  useDispatch();
    const [country, setCountry] = useState('')
    const listCountries= useSelector(state=>state.countries.dataCountries)
    console.log(listCountries)
    console.log(country, 'ngara')

    useEffect(()=>{
        getCountries() 
        .then((response) => {
            console.log(response);
            dispatch(setCountries(response.data));
            })
        .catch((error)=>{
            //console.log('error login'.error)
        })
    },[])
    return (
        <div className='container'>
            <div>
                <h2>Create new Account</h2>
            </div>
            <form>
                <label>Title</label>
                <div>
                    <input type="checkbox"></input><span>Mrs</span>
                    <input type="checkbox"></input><span>Ms</span>
                    <input type="checkbox"></input><span>Mdm</span>
                    <input type="checkbox"></input><span>Mr</span>
                    <input type="checkbox"></input><span>Dr</span>
                </div>
                <div className='profile'>
                    <div className='form-group'> 
                        <label>First name<span>*</span></label>
                        <input type='text' placeholder='First name'></input>
                    </div>
                    <div className='form-group'>
                        <label>Last name<span>*</span></label>
                        <input type='text' placeholder='Last name'></input>
                    </div>
                    <div className='form-group'>
                            <label>Mobile Phone Number<span>*</span></label>
                            <div style={{display:'flex'}}>
                                <select style={{marginRight:'10px'}}id='flag' name='flag'>
                                    <option value=''><img alt='flag'/></option>
                                </select>
                                <input style={{width:'100%'}}type='text' placeholder='Mobile Phone Number'></input>
                            </div>
                     </div>
                </div>
                <h2>Address</h2>
                <div className='address'>
                    <div className='form-group'>
                        <label>Addres</label>
                        <input type='text' placeholder='Address'></input>
                    </div>
                </div>
                <div className='profile'>
                    <div className='form-group'>
                            <label>Country/Location<span>*</span></label>
                            <select id='country' name='country'>
                                {
                                    listCountries.map(country=>(
                                        <option  value={country.country}>{country.country}</option>
                                    ))
                                }
                                
                            </select>
                    </div>
                    <div className='form-group'>
                            <label>Province/District</label>
                            <select id='province' name='province'>
                                <option value=''>Province</option>
                            </select>
                    </div>
                </div>
                <h2>Contacts</h2>
                <div className='profile'>
                    <div className='form-group'>
                        <label>Email Addres<span>*</span></label>
                        <input type='text' placeholder='Email Address'></input>
                    </div>
                    <div className='form-group'>
                        <div className='birth'>
                            <div className='birth-group'>
                                <label>Date of Birth<span>*</span></label>
                                <select id='province' name='province'>
                                     <option value=''>DD</option>
                                </select>
                            </div>
                            <div className='birth-group'>
                                <label>Month<span>*</span></label>
                                <select id='province' name='province'>
                                     <option value=''>MM</option>
                                </select>
                            </div>
                            <div className='birth-group'>
                                <label>year</label>
                                <select id='province' name='province'>
                                     <option value=''>YY</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>  
                <PrivacyNote />
                <div className='button'>
                     <input type='button' value='CREATE CUSTOMER'></input>  
                </div>
            </form>
        </div>
    )
}

export default Form
