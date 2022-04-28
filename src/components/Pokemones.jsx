import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { anteriorPokemonAccion, obtenerPokemonesAccion, siguientePokemonAccion, unPokemonDetalleAccion } from '../redux/pokeDucks';
import Detalle from './Detalle';

const Pokemones = () => {

    const dispatch = useDispatch();

    const pokemones = useSelector(store => store.pokemones.results);
    const next = useSelector(store => store.pokemones.next);
    const previous = useSelector(store => store.pokemones.previous);

    useEffect(() => {
      const fecthData = ()=>{
          dispatch(obtenerPokemonesAccion());
      }
      fecthData()
    }, [dispatch])

    return (
        <div className='row'>
            <div className="col-md-6">
                <h3>Lista de Pokemones</h3>
                <br />
                <div className="d-flex justify-content-between">
                    <br />
                    {
                        pokemones.length === 0 &&
                        <button className='btn btn-dark' onClick={() => { dispatch(obtenerPokemonesAccion()) }}>Get Pokemones</button>
                    }

                    {
                        next &&
                        <button className='btn btn-dark' onClick={() => { dispatch(siguientePokemonAccion(20)) }}>siguiente</button>
                    }

                    {
                        previous &&
                        <button className='btn btn-dark' onClick={() => { dispatch(anteriorPokemonAccion(20)) }}>anterior</button>
                    }

                </div>

                <ul className='list-group mt-3'>
                    {
                        pokemones.map(item => (
                            <li className='list-group-item text-uppercase' key={item.name}>
                                {item.name}
                                <button 
                                onClick={()=>{dispatch(unPokemonDetalleAccion(item.url))}}
                                className="btn btn-dark btn-sm float-right">
                                    Info
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="col-md-6">
                <h3>Detalle Pokemon</h3>
                <Detalle />
            </div>
        </div>
    )
}

export default Pokemones