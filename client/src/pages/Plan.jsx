import React from 'react'
import Map from '../components/plan/Map';
import Card from '../components/plan/Card';

function Plan() {
  return (
    <>
      <div className=" absolute z-20 bottom-10">
        <Card/>
      </div>
      <Map/>
    </>
  )
}

export default Plan
