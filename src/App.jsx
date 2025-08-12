import { useLoaderData } from 'react-router'
import { useState } from 'react'

import './App.css'
import CoffeeCard from './components/CoffeeCard';
function App() {
  const loadedCoffees = useLoaderData();
  const [coffees,setCoffees]=useState(loadedCoffees);
  return (
    <div className='m-16'>
      <h1 className='text-6xl text-purple-600 text-center'>Total coffee Count:{coffees.length}</h1>
   <div className='grid md:grid-cols-2 gap-3.5'>
     {
      coffees.map(coffee=><CoffeeCard
      key={coffee._id}coffee={coffee}
      coffees={coffees} setCoffees={setCoffees}
      ></CoffeeCard>)
    }
   </div>
   </div>
    
  )
}

export default App
