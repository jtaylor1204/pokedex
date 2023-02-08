import React from 'react';
import './Pokecard.css';

const fancyImages = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

function Pokecard (props){
  
    function fancyImage(){
        if (props.id < 10 ){
            let fancyId = `00${props.id}`;
        return `${fancyImages}${fancyId}.png`;
        } if (props.id >=100){
            return `${fancyImages}${props.id}.png`;
        }
        else{
            let fancyId = `0${props.id}`;
            return `${fancyImages}${fancyId}.png`;
        }   
    }

    return(
        <div className="Pokecard">
            <h2>{props.name}</h2>
            <div className="image-container">
            <img src={fancyImage()} alt={props.alt} />
            </div>
            <p>TYPE: {props.type}</p>
            <p>EXP: {props.exp}</p>
            
        </div>
    )
}

export default Pokecard;