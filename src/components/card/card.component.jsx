import React from 'react';
import './card.styles.css'
//passing individual monster as prop from 'classList Component'
export const Card = props => (
    <div className = "card-container">
        <img alt = "monster" src= {`https://robohash.org/${props.monster.id}?set=set2& size=150*150`} />
        <h1> {props.monster.name}</h1>
        <p>{props.monster.email}</p>
        <p><a href={props.monster.website} title="website address">{props.monster.website}</a></p>
    </div>
)