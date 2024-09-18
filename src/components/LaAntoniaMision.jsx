import videoLaAntonia from "../assets/mission.mp4"

const LaAntoniaMision = () => {
  return (

    <div className="mt-20 container mx-auto text-center">
      <div className="relative flex items-center justify-center w-full h-screen">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoLaAntonia} type="video/mp4" />
        </video>
        <div className="absolute h-full w-full bg-black/40"></div>
        <p className="text-white absolute max-w-lg tracking-tighter lg:text-3xl z-10">
          Hay una nueva tierra por descubrir, de horizontes infinitos, donde el sol es tan brillante que parece estar muy cerca.
          Una tierra llena de encantos donde los amaneceres se vuelven eternos y marcan el comienzo de una nueva historia. El aire se renueva, los ruidos se desvanecen y la naturaleza cobra vida.
        </p>
      </div>
    </div>
  
  )
}

export default LaAntoniaMision