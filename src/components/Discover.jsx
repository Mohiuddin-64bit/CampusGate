import Title from "./ui/Title"


const Discover = () => {
  return (
    <div className="bg-[#0C1425]">
      <Title title="Discover More" subtitle="Discover the best colleges in the world" />
      <div className="grid grid-cols-1 gap-5 px-5 py-10 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
        <div className="card bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/assets/slider/1.jpg')` }}>
          <div className="card-body">
            <h2 className="card-title text-center">Harvard University</h2>
            <p className="text-neutral-content">Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Founded in 1636 as Harvard College and named for its first benefactor, the Puritan clergyman John Harvard.</p>
            <button className="btn btn-primary">View College</button>
          </div>
        </div>
        <div className="card bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/assets/slider/2.jpg')` }}>
          <div className="card-body">
            <h2 className="card-title text-center">Stanford University</h2>
            <p className="text-neutral-content">Stanford University is a private research university in Stanford, California. Stanford is known for its academic achievements, wealth, close proximity to Silicon Valley, and selectivity; it ranks as one of the world&apos;s top universities.</p>
            <button className="btn btn-primary">View College</button>
          </div>
        </div>
        <div className="card bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/assets/slider/3.jpg')` }}>
          <div className="card-body">
            <h2 className="card-title text-center">Massachusetts Institute of Technology</h2>
            <p className="text-neutral-content">The Massachusetts Institute of Technology is a private land-grant research university in Cambridge, Massachusetts. The institute has an urban campus that extends more than a mile alongside the Charles River.</p>
            <button className="btn btn-primary">View College</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover