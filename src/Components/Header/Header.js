import React from 'react'
import logo from '../../Assets/logo.png'
import './Header.css'
import Message from './Message'
import { IoIosArrowDown,IoIosSettings } from "react-icons/io";


function Header() {
    return (
        <div>
            <div className='header'>
                <div className='logo'>
                    <img src={logo}/>
                </div>
                <div className='lang'>
                    <div>Language : 
                        <select style={{border:'none', backgroundColor:'rgba(0,0,0,0)', outline:'none'}}>
                            <option>English</option>
                            <option>Bahasa</option>
                        </select>
                    </div> 
                    <IoIosSettings />           
                </div>
            </div>
            <Message />
        </div>
    )
}

export default Header
