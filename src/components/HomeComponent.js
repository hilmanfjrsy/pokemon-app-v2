import React, { lazy, Suspense } from 'react';
const CardPokemon = lazy(() => import('./CardPokemon'));
const renderLoader = () => <div className='card-container w-100 h-100' />;

export default function HomeComponent({ listPokemon = [], setUrl, nextUrl }) {
  return (
    <div className='container p-5 flex-center'>
      <div>
        <div className='center' style={{ marginTop: 10 }}>
        </div>
        <div className='container-grid' >
          {listPokemon.map((item, index) => <Suspense fallback={renderLoader()} key={index}><CardPokemon item={item} index={index} /></Suspense>)}
        </div>
        {listPokemon.length > 0 && <div className='center' style={{ marginTop: 30, marginBottom: 30 }}>
          <button
            className='btn btn-primary'
            onClick={() => setUrl(nextUrl)}
          >
            Load more
          </button>
        </div>}
      </div>
    </div>
  )
}