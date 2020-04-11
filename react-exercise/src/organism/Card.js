import React from 'react'

function Card(props){
    return (
       <article>
           <h1>{props.title}</h1>
            <p>{props.channelName}</p>
       </article>

    )
}

export default Card