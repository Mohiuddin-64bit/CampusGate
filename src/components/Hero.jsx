import backgroundImage from "../assets/slider/2.jpg";

const Hero = () => {
  return (
    <div
      className="hero min-h-[80vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}>
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold leading-[4rem]">Welcome to <span className="text-primary">Campus Gate</span></h1>
          <p className="mb-5">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
          </p>
          <div className="flex justify-center gap-5">

            <button className="btn btn-outline rounded-none btn-primary">Admission</button>
            <button className="btn rounded-none btn-primary">View Colleges</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero