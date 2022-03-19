import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextProvider } from '../context/BaseContext';

export default function CardPokemon({ item, index }) {
  const context = useContext(ContextProvider)
  const pokemonOwned = context.myPokemon.filter(v => v.id == item.id)
  return (
    <Link to={'/detail-pokemon'}
      state={item}>
      <div key={index} className='card' >
        <div className='card-container' >
          <div className='img-container'>
            <img src={item.sprites.front_default} alt={item.name} />
          </div>
          <small className='center'>#{String(item.id).padStart(3, '0')} {item.nickname && item.name.toUpperCase()}</small>
          <span className='card-title center'>{item.nickname ? item.nickname.toUpperCase() : item.name.toUpperCase()}</span>
          {pokemonOwned.length > 0 && !item.nickname && <small className='center'>Owned {pokemonOwned.length}</small>}
        </div>
      </div>
    </Link>
  )
}