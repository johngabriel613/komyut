import React from 'react'
import Input from '../common/Input';
import { Icon } from '@iconify/react';
import { StyleControls } from './TrafficController';
import { useMap } from '../../hooks/useMap';

function Card() {
  const {setMapStyle} = useMap()
        
  return (
    <div className="container-6xl">
      <div className='w-full max-w-[400px] grid gap-4 bg-card border border-gray-300/20  rounded-lg p-6 isolate'>
        <p className='text-sm text-dark'>Plan a Route</p>
        <div className='grid gap-4'>
          <div className="flex-center gap-1">
            <div className="w-full grid gap-2">
              <div className="flex-center gap-2">
                <label htmlFor="origin" className="flex-center gap-1 dotted-line bg-card">
                  <Icon icon="ic:baseline-trip-origin" className="text-primary text-xl "/>
                </label>
                <Input id="origin" name={"origin"} placeholder={"Type your starting point"}/>
              </div>
              <div className="flex-center gap-2">
                <label htmlFor="destination" className="flex-center gap-1 bg-card">
                  <Icon icon="fluent:location-16-filled" className="text-primary text-xl"/>
                </label>
                <Input id="destination" name={"destination"} placeholder={"Type your destination"}/>
              </div>
            </div>
            <button>
              <Icon icon="mynaui:arrow-diagonal-two" className="text-[#808080] text-4xl"/>
            </button>
          </div>
          <button className='w-full btn-lg bg-primary'>Search</button>
        </div>
        <div className="">
          <p className='text-sm text-dark'>Advanced Options</p>
          <StyleControls onChange={setMapStyle}/>
        </div>
      </div>
      
      
    </div>
  )
}

export default Card
