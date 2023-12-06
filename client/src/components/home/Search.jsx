import Input from '../common/Input'
import { Icon } from '@iconify/react';

function Search() {
  return (
    <div className="container-5xl absolute bottom-[-60px] flex-center justify-between gap-2 bg-card border border-gray-300/20 rounded-lg py-7 px-7">
      <div className="w-full flex gap-4">
        <div className="w-full grid gap-2">
          <label htmlFor="" className="flex-center gap-1">
            <Icon icon="ic:baseline-trip-origin" className="text-primary"/>
            Starting Point
          </label>
          <Input name={"origin"} placeholder={"Type your starting point"}/>
        </div> 
        <button className="self-end">
          <Icon icon="mynaui:arrow-diagonal-two" className="text-[#808080] text-4xl"/>
        </button>
        <div className="w-full grid gap-2">
          <label htmlFor="" className="flex-center gap-1">
            <Icon icon="fluent:location-16-filled" className="text-primary"/>
            Destination
          </label>
          <Input name={"destination"} placeholder={"Type your destination"}/>
        </div> 
        <button className="h-auto w-full max-w-[200px] flex-center justify-center gap-1 btn-lg bg-primary">
          <Icon icon="mingcute:search-line" color="white" />
          Search
        </button>
      </div>
    </div>
  )
}

export default Search
