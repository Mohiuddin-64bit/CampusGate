import { useParams } from 'react-router-dom';
import { useGetSingleCollegeQuery } from '../../redux/api/collegeSlice';


const CollegeDetails = () => {
  const { id } = useParams();
  const { data: college, error, isLoading } = useGetSingleCollegeQuery(id);

  console.log(college);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading college details</div>;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <input
          key={i}
          type="radio"
          name="rating-1"
          className={`mask mask-star-2 ${i <= rating ? 'bg-yellow-500' : ''}`}
          readOnly
        />
      );
    }
    return stars;
  };

  return (
    <div className='container mx-auto mt-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
        <img src={college.image} alt={college.name} className="min-w-[300px] min-h-[200px] px-4 mx-auto object-cover" />
        <div className='text-start ms-5'>
          <h1 className='text-3xl font-bold mb-4'>{college.name}</h1>
          {college.admissionDates && <p><strong>Admission Dates:</strong> {college.admissionDates}</p>}
          {college.events && (
            <div>
              <strong>Events:</strong>
              <ul style={{ listStyleType: 'disc', }}>
                {college.events.map((sport, index) => (
                  <li className='ms-5' key={index}>{sport}</li>
                ))}
              </ul>
            </div>
          )}
          {college.researchHistory && (
            <div>
              <strong>Research History:</strong>
              <ul style={{ listStyleType: 'disc', }}>
                {college.researchHistory.map((sport, index) => (
                  <li className='ms-5' key={index}>{sport}</li>
                ))}
              </ul>
            </div>
          )}
          {college.sports && (
            <div>
              <strong>Sports:</strong>
              <ul style={{ listStyleType: 'disc', }}>
                {college.sports.map((sport, index) => (
                  <li className='ms-5' key={index}>{sport}</li>
                ))}
              </ul>
            </div>
          )}
          {/* Rating */}
          <h3 className=' font-bold'>Rating:</h3>
          <div className="rating">
            {renderStars(college.ratings)}
          </div>
        </div>
        {/* Review */}
        {
          college.reviews > 0 && (
            <div className='col-span-2'>
              <h3 className='text-3xl font-bold'>Reviews</h3>
              {college.reviews.map((review, index) => (
                <div key={index} className='border-2 border-gray-400 p-4 my-4'>
                  <h4 className='text-xl font-bold'>{review.name}</h4>
                  <p>{review.review}</p>
                  <div className="rating">
                    {renderStars(review.rating)}
                  </div>
                </div>
              ))}
            </div>
          )
        }
      </div>
    </div>
  );
};

export default CollegeDetails;