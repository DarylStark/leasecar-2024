'use client'

import { useState } from 'react';
import Input from '../components/Input'
import Prices from '../widgets/Prices'

function Home() {
  let [car_price, set_car_price] = useState(0);

  const update = (event: Any) => {
    set_car_price(Number(event.target.value));
  }

  return (
    <>
      <h1>Leaseauto 2024</h1>
      <p>
        Gebruik de onderstaande velden om de bijtelling voor een auto te berekenen.
      </p>
      <p>
        <Input onChange={update} placeholder='Cataloguswaarde van de auto'></Input>
      </p>
      <Prices car_price={car_price}></Prices>
    </>
  )
}

export default Home;