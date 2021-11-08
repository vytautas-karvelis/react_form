import React, { useState } from 'react'

const Outline = ({render}) => {

    const [color, setColor] = useState('gray')

    const changeColor = (length) => {
        if(length < 5){
            setColor('red')
        } else {
            setColor('green')
        }
    }

    return (
        render(color, changeColor)
    )
}

export default Outline
