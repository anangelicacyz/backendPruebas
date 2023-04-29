import axios from 'axios'
import { useEffect, useState } from 'react'

function Board(){
    const [fotos, setFotos] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')

            .then((response)=>{
                console.log(response.data)
                setFotos(response.data.slice(0,50))
                
            })


    },[] )

    return (
        <div className="board-container">
            {fotos.map(element => {
                return (
                    <div className= 'square'>
                        <img src= {element.thumbnailUrl} />
                        <p>{element.title}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Board