import { useState } from 'react'
import Modal from '../../components/ui/Modal'
import Title from '../../components/ui/Title'
import { useGetCollegesQuery } from '../../redux/api/collegeSlice'

const Admission = () => {
  const { data: allColleges, isLoading, isError } = useGetCollegesQuery()
  const [collegeInfo, setCollegeInfo] = useState(null)

  const handleModal = (college) => {
    setCollegeInfo(college)
    document.getElementById('modal').showModal()
  }

  return (
    <div className='container mx-auto'>
      <Title title="Admission" subtitle="Discover the best colleges in the world" />
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-3 md:px-0'>
        {
          allColleges?.map((college, index) => (
            <div onClick={() => handleModal(college)} className='p-4 bg-[#0C1425] hover:bg-slate-900 cursor-pointer transition-all border border-slate-700 text-center' key={index}>
              <h2>{college.name}</h2>
            </div>

          ))
        }
        <Modal />
      </div>
    </div>
  )
}

export default Admission