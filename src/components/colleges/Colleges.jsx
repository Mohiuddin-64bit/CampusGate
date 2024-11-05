import Title from "../ui/Title"
import CollegesCard from "./CollegesCard"
import { useGetCollegesQuery } from "../../redux/api/collegeSlice"
import Skeleton from "../Skeleton"

const Colleges = () => {
  const { data: allColleges, isLoading, isError } = useGetCollegesQuery()

  return (
    <div className="container mx-auto py-12">
      <Title title="Popular Colleges" subtitle="Discover the best colleges in the world" />

      {
        isError && (<div className="text-center">Error loading colleges.</div>)
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => <Skeleton key={index} />)
        ) : (
          allColleges?.slice(0, 3).map((college, index) => (
            <CollegesCard key={index} college={college} />
          ))
        )}
      </div>
    </div>
  )
}

export default Colleges