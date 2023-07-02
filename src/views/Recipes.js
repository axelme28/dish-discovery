import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Recipes = () => {
  useEffect(() => {
    console.log('hello from recipes');
  }, [])

  return (
    <div className='app'>
      <h2 className='text-center'>Search for recipes</h2>
      <div>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search" />
          <div className="input-group-append">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
