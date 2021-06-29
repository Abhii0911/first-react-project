import React from 'react';
import './card-list.styles.css'
import { Card } from '../card/card.component'

//Functional Component
export const CardList = props => {//props in this case will be an object containing an array element called 'monsters'
    //console.log(props)// Return an object of all attributes give to this Component
    return <div className='card-list'>
        {props.monsters.map(monster => {
          return (
            <Card key={monster.id} monster={monster}> </Card>
          )
        })}
        
         </div>//returning children inside a <div>
} 