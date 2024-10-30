import Title from "../ui/Title"
import CollegesCard from "./CollegesCard"
import { useGetCollegesQuery } from "../../redux/api/collegeSlice"

const Colleges = () => {
  const { data: allColleges, isLoading, isError } = useGetCollegesQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading colleges.</div>
  }

  return (
    <div className="container mx-auto">
      <Title title="Popular Colleges" subtitle="Discover the best colleges in the world" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {allColleges.slice(0, 3).map((college, index) => (
          <CollegesCard key={index} college={college} />
        ))}
      </div>
    </div>
  )
}

export default Colleges