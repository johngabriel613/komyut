import Input from "../components/common/Input"
import Hero from "../components/home/Hero"
import RadialBlur from "../components/home/RadialBlur"
import Search from "../components/home/Search"

function Home() {
  return (
    <>
      <RadialBlur/>
      <div className="relative flex justify-center pt-[100px]">
        <Hero/>
        <Search/>
      </div>
    </>
  )
}

export default Home
