import { useContext } from 'react';
import JokeContext from './context/JokeContext';
import { ContextType } from './types';
import Navbar from './Navbar';

function Library() {
  const {select} = useContext(JokeContext) as ContextType
  console.log(select)
  return (
    <div className='wrapper'>
      <div className='main-wrapper'>
        <Navbar/>
        <ul className='list-wrapper'>
          {select && select.map((item) => (
            <li key={item.id} className='list-item'>
              {item.setup}
            </li>
          ))}
        </ul> 
      </div>
    </div>
  )
}

export default Library
