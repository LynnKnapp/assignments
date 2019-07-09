import React from 'react'
import Pets from './Pets'

const Friends=(props) =>{
    const mappedPets =props.pets.map((pet, i)=>
                                        <Pets 
                                        key ={i + pet.name}
                                        name ={pet.name}
                                        breed ={pet.breed}
                                        />)


    return(
        <div className ="Pals">
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        {mappedPets}
        </div>    
    ) 

}
export default Friends