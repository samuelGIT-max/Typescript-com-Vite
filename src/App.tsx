import { useState } from 'react'
import './App.css'
import { FoodData } from './interface/FoodData';
import { Card } from './components/card/card';

function App() {

  const data: FoodData[] = [];

  return (
   <div className="container">
    <h1>Cardapio</h1>
    <div className="card-grid">
      {data.map(foodData => 
      <Card 
        price={foodData.price} 
        title={foodData.title} 
        image={foodData.image}
        />)}
    </div>
   </div>
  )
}

export default App
