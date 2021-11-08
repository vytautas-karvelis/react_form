import React, { useEffect, forwardRef } from 'react'
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';

const TextInput = ({type, color, changeColor, action, children, className}, ref) => {

    const handleOnchange = (e) => {
        if(type==="email"){
            if(e.target.value.includes('@')){
                changeColor(5)
                return
            } else {
                changeColor(-1)
                return
            }
        }
        let length = e.target.value.length       
        changeColor(length)
    }
 

    return (
       <React.Fragment>
            {children }   
            <input type={type} onChange={(e)=>{
                    handleOnchange(e)
                    action(e)
                }} className={`${color} ${className}`} ref={ref}>
                
            </input>
       </React.Fragment>
      
    )
}

TextInput.propTypes = {
    type:PropTypes.string,
    color:PropTypes.string,
    changeColor:PropTypes.func,
    action:PropTypes.func
}

export default forwardRef(TextInput)
