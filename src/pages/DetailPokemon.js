import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { ContextProvider } from '../context/BaseContext';
import { capitalizeFirstLetter, releasePokemon } from '../utils/GlobalFunction';
import GlobalVar from '../utils/GlobalVar';

export default function DetailPokemon() {
  const context = useContext(ContextProvider)
  const navigate = useNavigate()
  const { state } = useLocation()

  const about = [
    {
      left: 'Exp',
      right: state.base_experience,
    },
    {
      left: 'Height',
      right: parseFloat(state.height / 10) + ' m',
    },
    {
      left: 'Weight',
      right: parseFloat(state.weight / 10) + ' kg',
    },
    {
      left: 'Abilities',
      right: state.abilities.map(item => capitalizeFirstLetter(item.ability.name)).join(', ')
    },
    {
      left: 'Egg Groups',
      right: state.species.egg_groups.map(item => capitalizeFirstLetter(item.name)).join(', ')
    },
    {
      left: 'Generation',
      right: capitalizeFirstLetter(state.species.generation.name),
    },
    {
      left: 'Growth Rate',
      right: capitalizeFirstLetter(state.species.growth_rate.name)
    },
    {
      left: 'Habitat',
      right: capitalizeFirstLetter(state.species.habitat.name)
    },
  ]
  // console.log(state)
  return (
    <div className='container'>
      <button onClick={() => navigate(-1)} className='btn btn-back'>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className='container-detail'>
        <div className='detail-img'>
          <img src={state.sprites.front_default} alt='pokemon' />
        </div>
        <div className='container-description'>
          <div className=' space-between'>
            <div>
              <small className=''>#{String(state.id).padStart(3, '0')} {state.nickname && state.name.toUpperCase()}</small>
              <span className='card-title f-20'>{state.nickname ? state.nickname.toUpperCase() : state.name.toUpperCase()}</span>
            </div>
            <div className='' >
              {state.types.map((item, index) => <Badges key={index} item={item.type.name} />)}
            </div>
          </div>
          <div>
            <span className='card-title'>About</span>
            {about.map((item, index) => <AboutPokemon key={index} left={item.left} right={item.right} />)}
          </div>

          <div className='container-bottom '>
            {state.nickname ?
              <button
                className='btn btn-primary'
                onClick={() => { releasePokemon(state, context, context.myPokemon, navigate) }}
                style={{ width: '100%', marginTop: 20, backgroundColor: 'firebrick' }}
              >
                Release Pokemon
              </button>
              :
              <button
                className='btn btn-primary'
                onClick={() => catchPokemon(state)}
                style={{ width: '100%', marginTop: 20 }}
              >
                Catch Pokemon
              </button>
            }
          </div>

          <span className='card-title mt-2'>Evolution</span>
          <div className='space-between'>
            {state.species.evolution_chain.map((item, index) => <EvolutionPokemon key={index} item={item} index={index} />)}
          </div>
          <span className='card-title mt-2'>Base Stats</span>

          {state.stats.map((val, idx) => {
            return (
              <div key={idx}>
                <small>{capitalizeFirstLetter(val.stat.name)} ({val.base_stat})</small>
                <progress className={`progress-detail ${'progress-' + val.stat.name}`} value={val.base_stat} max="255" />
              </div>
            )
          })}

          <span className='card-title mt-2'>Moves</span>
          <div className='wrap'>
            {state.moves.map((item, index) => <Badges key={index} item={item.move.name} />)}
          </div>

        </div>
      </div>
    </div>
  )

  function Badges({ item }) {
    return (
      <span className='badge-primary'>{capitalizeFirstLetter(item)}</span>
    )
  }

  function AboutPokemon({ left, right }) {
    return (
      <div className='space-between mt-1'>
        <span className='font-secondary'>{left}</span>
        <span className='font-primary'>{right}</span>
      </div>
    )
  }

  function EvolutionPokemon({ item, index }) {
    return (
      <>
        {index != 0 &&
          <div className='arrow'>
            <FontAwesomeIcon icon={faArrowRight} />
            {item.min_level && <small>(Level {item.min_level})</small>}
          </div>
        }
        <div className='evolution-container'>
          <img src={item.avatar} alt={item.name} />
          <small>{capitalizeFirstLetter(item.name)}</small>
        </div>
      </>
    )
  }

  function catchPokemon(pokemon) {
    let percentage = Math.random()
    let probability = 0.50

    let timerInterval
    Swal.fire({
      title: `Catch ${capitalizeFirstLetter(pokemon.name)}`,
      html: 'Will be successful if the percentage is above 50%',
      timer: 2000,
      timerProgressBar: true,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        if (percentage < probability) {
          Swal.fire(
            {
              title: `Failed to catch ${capitalizeFirstLetter(pokemon.name)}`,
              text: `Your percentage is ${parseInt(percentage * 100)}%`,
              icon: 'error',
              confirmButtonColor: GlobalVar.secondaryColor,
              confirmButtonText: 'Close',
              allowOutsideClick: false
            }
          )
        } else {
          Swal.fire(
            {
              title: `Congrats you got ${capitalizeFirstLetter(pokemon.name)}`,
              text: `With percentage ${parseInt(percentage * 100)}%`,
              icon: 'success',
              confirmButtonColor: GlobalVar.secondaryColor,
              confirmButtonText: 'Give Nickname!',
              allowOutsideClick: false
            }).then((result) => {
              if (result.isConfirmed) {
                giveNickname(pokemon)
              }
            })
        }
      }
    })
  }

  function giveNickname(pokemon) {
    Swal.fire({
      title: 'Give your pokemon a nickname',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      confirmButtonText: 'Save',
      confirmButtonColor: GlobalVar.secondaryColor,
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: (nickname) => {
        return nickname
      },
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        let checkPokemon = context.myPokemon
        let find = checkPokemon.find(item => item.nickname.toLowerCase() == result.value.toLowerCase())
        if (find) {
          Swal.fire(
            {
              title: `Failed`,
              text: `Pokemon with nickname ${result.value} already exists`,
              icon: 'error',
              confirmButtonColor: GlobalVar.secondaryColor,
              confirmButtonText: 'Change Nickname!',
              allowOutsideClick: false
            }).then((result) => {
              if (result.isConfirmed) {
                giveNickname(pokemon)
              }
            })
        } else {
          pokemon.nickname = result.value
          checkPokemon.push(pokemon)
          context.setMyPokemon(checkPokemon)
          localStorage.setItem('myPokemon', JSON.stringify(checkPokemon))
          Swal.fire({
            title: `${result.value}`,
            text: `New pokemon has been added!`,
            confirmButtonColor: GlobalVar.secondaryColor,
            imageUrl: pokemon.sprites.front_default
          })
        }
      }
    })
  }
}