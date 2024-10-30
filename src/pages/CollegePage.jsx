import CollegesCard from "../components/colleges/CollegesCard"
import Title from "../components/ui/Title"
import { useGetCollegesQuery } from "../redux/api/collegeSlice"

const CollegePage = () => {
  const { data: allColleges, isLoading, isError } = useGetCollegesQuery()

  return (
    <div className="container mx-auto">
    <Title title="All Colleges" subtitle="Discover the best colleges in the world" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {allColleges?.map((college, index) => (
        <CollegesCard key={index} college={college} />
      ))}
    </div>
  </div>
  )
}

export default CollegePage