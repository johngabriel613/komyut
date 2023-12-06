import { heroImg } from "../../constants/images"

function Hero() {
  return (
    <div className="container-6xl">
      <div className="bg-white/[.05] pt-[60px] pb-[80px] backdrop-blur rounded-lg">
        <div className="relative container-5xl flex-center justify-between gap-3">
          <div className="w-100 lg:max-w-[400px] grid gap-4">
            <h1 className="text-4xl text-dark font-bold leading-[1.1]">
              Your Guide to Effortless 
              <span className="text-primary"> Metro Manila </span>
              Commuting
            </h1>
            <p 
            className="leading-[1.5]">Lorem ipsum dolor sit amet. Aut maxime facilis aut doloribus ipsum cum itaque nihil ea beatae quia ea illum dolor? </p>
          </div>
          <img src={heroImg} alt="hero" className="hidden w-100 max-w-[600px] lg:block" />
        </div>
      </div>
    </div>
  )
}

export default Hero
