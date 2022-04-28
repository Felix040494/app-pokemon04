import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unPokemonDetalleAccion } from '../redux/pokeDucks';

const Detalle = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      const fecthData = ()=>{
          dispatch(unPokemonDetalleAccion());
      }
      fecthData()
    }, [dispatch])
    
    const pokemon = useSelector(store => store.pokemones.unPokemon)

  return (
    <div className='card mt-4 text-center'>
        <div className="card-body">
            <img src={pokemon.foto} className='img-fluid' alt="" />
            <div className="card-title">
                {pokemon.nombre}
            </div>
            <p className="card-tex">
                Alto:{pokemon.alto} | Ancho: {pokemon.ancho}
            </p>

        </div>

    </div>
  )
}

export default Detalle