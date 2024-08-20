import React from 'react'
import Headers from '../components/Headers/Headers'
import Banner from '../components/BasicComponent/Banner'
import OrderOnline from '../components/OrderOnline/OrderOnline'
import Restaurents from '../components/Restaurent/Restaurents'
import FoodItems from '../components/FoodItems/FoodItems'


function Home() {
  return (
    <div>
        {/* <FoodItems /> */}
        <Headers />
        <Restaurents />
        <Banner  />
        <OrderOnline />
    </div>
  )
}

export default Home