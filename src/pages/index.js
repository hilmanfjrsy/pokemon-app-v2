import React, { Fragment, lazy, Suspense, useContext, useEffect, useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import { ContextProvider } from '../context/BaseContext';
import Navigation from '../router/Navigation';
import { getRequest } from '../utils/GlobalFunction';
const CardPokemon = lazy(() => import('../components/CardPokemon'));
const renderLoader = () => <div className='card' />;
export default function Home() {
  const context = useContext(ContextProvider)
  const [listPokemon, setListPokemon] = useState([])
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextUrl, setNextUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [firstLoading, setFirstLoading] = useState(true)

  async function getPokemon() {
    setLoading(true)
    const response = await getRequest(url)
    setNextUrl(response.data.next)
    var temp = []
    response.data.results.map(async item => {
      let tempEvo = []
      const res = await getRequest(item.url)
      const resSpecies = await getRequest(res.data.species.url)
      const resEvolution = await getRequest(resSpecies.data.evolution_chain.url)

      const evo1 = resEvolution.data.chain
      const evo2 = resEvolution.data.chain.evolves_to[0]
      const evo3 = resEvolution.data.chain.evolves_to[0]?.evolves_to[0]

      if (evo1) {
        const resEvo1 = await getRequest(`https://pokeapi.co/api/v2/pokemon/${evo1.species.name}`)
        tempEvo.push({
          name: evo1.species.name,
          avatar: resEvo1.data.sprites.front_default,
          min_level: evo1.evolution_details[0]?.min_level
        })
      }
      if (evo2) {
        const resEvo2 = await getRequest(`https://pokeapi.co/api/v2/pokemon/${evo2.species.name}`)
        tempEvo.push({
          name: evo2.species.name,
          avatar: resEvo2.data.sprites.front_default,
          min_level: evo2.evolution_details[0]?.min_level
        })
      }
      if (evo3) {
        const resEvo3 = await getRequest(`https://pokeapi.co/api/v2/pokemon/${evo3.species.name}`)
        tempEvo.push({
          name: evo3.species.name,
          avatar: resEvo3.data.sprites.front_default,
          min_level: evo3.evolution_details[0]?.min_level
        })
      }

      resSpecies.data.evolution_chain = tempEvo
      res.data.species = resSpecies.data
      temp.push(res.data)
      setListPokemon(listPokemon.concat(temp).sort((a, b) => a.id - b.id))
      setFirstLoading(false)
      setLoading(false)
    })

  }

  useEffect(() => {
    getPokemon()
  }, [url])

  if (loading && firstLoading) return <LoadingScreen />

  return (
    <Fragment>
      <Suspense fallback={<div/>}>
        <Navigation />
      </Suspense>
      <div className='container p-5 flex-center'>
        <div>
          <div className='center' style={{ marginTop: 10 }}>
          </div>
          <div className='container-grid' >
            {listPokemon.map((item, index) => <Suspense fallback={renderLoader()} key={index}><CardPokemon item={item} index={index} /></Suspense>)}
          </div>
          <div className='center' style={{ marginTop: 30, marginBottom: 30 }}>
            <button
              className='btn btn-primary'
              onClick={() => setUrl(nextUrl)}
            >
              Load more
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}