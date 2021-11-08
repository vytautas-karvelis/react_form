import React from 'react'

const Button = ({text, classname}) => {
    return (       
            <button className={classname}>{text}</button>
           )
}

export default Button
