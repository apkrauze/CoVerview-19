import React from 'react'


const Card = (props) => {
    return(
        <div className="cards">
            {props.children}

        </div>
    )
}

export default Card