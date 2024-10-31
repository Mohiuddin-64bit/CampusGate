import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';

const CollegesCard = ({ college }) => {
  const { userLoggedIn } = useAuth()
  const navigate = useNavigate();


  const handleDetailsClick = () => {
    if (userLoggedIn) {
      navigate(`/colleges/${college._id}`);
    } else {
      navigate("/login");
    }
  };



  return (
    <div className="card rounded-none border border-slate-700 bg-slate-800  max-w-[400px] shadow-xl m-4">
      <figure>
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {college.name}
        </h2>
        {college.admissionDates && <p><strong>Admission Dates:</strong> {college.admissionDates}</p>}
        {college.events && <p><strong>Events:</strong> {college.events}</p>}
        {college.researchHistory && <p><strong>Research History:</strong> {college.researchHistory}</p>}
        {college.sports && <p><strong>Sports:</strong> {college.sports}</p>}
        <div className="card-actions justify-end">
          <button onClick={handleDetailsClick} className="btn btn-sm btn-outline rounded-none btn-primary">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

CollegesCard.propTypes = {
  college: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    admissionDates: PropTypes.string,
    events: PropTypes.string,
    researchHistory: PropTypes.string,
    sports: PropTypes.string,
  }).isRequired,
};

export default CollegesCard;