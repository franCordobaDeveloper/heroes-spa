import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { HeroCard } from '../components/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../helpers';


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );

  // BUSQUEDA
  const heroes = getHeroByName( q );

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = ( e ) => {
    e.preventDefault();

    // if ( searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText }`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit } aria-label='form'>
            <input 
              type="text" 
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={ searchText }
              onChange={ onInputChange }
              />

              <button className="btn btn-outline-primary mt-2">
                Search
              </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            ( q === '' )
              ?  <div className="alert alert-primary">Search a hero</div>
              : ( heroes.length === 0 ) &&  <div aria-label= "alert-danger" className="alert alert-danger">No hero with <b>{ q }</b></div>
          }
        
          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } {...hero } />
            ))
          }
          

        </div>

      </div>
    </>
  )
}
