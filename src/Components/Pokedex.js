import React from "react";
import Pokecard from "./Pokecard";
import './Pokedex.css';

function Pokedex(props) {
  let title;
  if (props.isWinner) {
    title = <h2 className="Pokedex-winner">Winning Hand</h2>;
} else {
    title = <h2 className="Pokedex-loser">Losing Hand</h2>;
}

  return (
    <div className="Pokedex">
    {title}
    <h3>Total Experience: {props.exp}</h3>
        {props.pokemon.map((p) => (
            <Pokecard id={p.id} name={p.name} type ={p.type} exp={p.base_experience} 
           />
            ))}
        
    </div>
  );
}

export default Pokedex;
