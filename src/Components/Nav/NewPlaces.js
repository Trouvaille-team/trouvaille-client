import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';


class NewPlaces extends React.Component{


  render() {
    return (
      <div className='new-places-container'>
        <h1>What do you think of these places?</h1>
        <div className='top-options'>
          <div className='option'>
            <img alt='location-1'></img>
            <div className='title-button-container'>
              <button
              className='add-button'
              >
                <FontAwesomeIcon
                  icon={faTimes}
                />
               </button>
              <h2>Placeholder Title 1</h2>
              <button
              className='add-button'
              >
                <FontAwesomeIcon
                  icon={faPlus}
                />
              </button>
            </div> 
          </div>
          <div className='option'>
            <img alt='location-2'></img>
            <div className='title-button-container'>
            <button
              className='add-button'
              >
                <FontAwesomeIcon
                  icon={faTimes}
                />
               </button>
              <h2>Placeholder Title 2</h2>
              <button
              className='add-button'
              >
                <FontAwesomeIcon
                  icon={faPlus}
                />
              </button>
            </div> 
          </div>
        </div>
        <div className='bottom-options'>
          <div className='option'>
              <img alt='location-3'></img>
              <div className='title-button-container'>
              <button
              className='add-button'
              >
                <FontAwesomeIcon
                  icon={faTimes}
                />
               </button>
                <h2>Placeholder Title 3</h2>
                <button
              className='add-button'
              >
                <FontAwesomeIcon
                  icon={faPlus}
                />
              </button>
              </div> 
            </div>
            <div className='option'>
              <img alt='location-4'></img>
              <div className='title-button-container'>
              <button
              className='add-button'
              >
                <FontAwesomeIcon
                  icon={faTimes}
                />
               </button>
                <h2>Placeholder Title 4</h2>
                <button
              className='add-button'
              >
                <FontAwesomeIcon
                  icon={faPlus}
                />
              </button>
              </div> 
            </div>
        </div>
      </div>
    )
  }
}

export default NewPlaces;