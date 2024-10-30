import Title from "../ui/Title"
import CollegesCard from "./CollegesCard"
import image1 from "../../assets/college/1.jpg"
import image2 from "../../assets/college/2.jpg"



const Colleges = () => {
  const colleges = [
    {
      image: image1,
      name: "Harvard University",
      admissionDates: "Jan 1 - Mar 31",
      events: "Orientation, Convocation",
      researchHistory: "Established in 1636, numerous Nobel laureates",
      sports: "Basketball, Soccer, Rowing"
    },
    {
      image: image1,
      name: "Stanford University",
      admissionDates: "Feb 1 - Apr 30",
      events: "Welcome Week, Homecoming",
      researchHistory: "Founded in 1885, leading research institution",
      sports: "Football, Swimming, Tennis"
    },
    {
      image: image2,
      name: "MIT",
      admissionDates: "Mar 1 - May 31",
      events: "Tech Fair, Graduation",
      researchHistory: "Founded in 1861, pioneering technology research",
      sports: "Track and Field, Fencing, Sailing"
    }
  ];
  return (
    <div className="container mx-auto">
      <Title title="Popular Colleges" subtitle="Discover the best colleges in the world" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {colleges.map((college, index) => (
          <CollegesCard key={index} college={college} />
        ))}
      </div>
    </div>
  )
}

export default Colleges