import React, { forwardRef } from 'react'

const Message = ({}, ref) => {
    return (
        <p ref={ref}>
            
        </p>
    )
}

export default forwardRef(Message)
