import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Header from './Components/Header/Header'
import Item from './Components/Item/Item'
import array from './Components/Data/data.json';



createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Header/>
    <div className='item_style'>
    {array.map((item, index) => (
      <Item 
          key = {index}
          name = {item.name}
          universe={item.universe}
          alterego={item.alterego}
          occupation={item.occupation}
          friends={item.friends}
          superpowers={item.superpowers}
          url={item.url}
          />
        ))
      }
      </div>

  </StrictMode>,
)
