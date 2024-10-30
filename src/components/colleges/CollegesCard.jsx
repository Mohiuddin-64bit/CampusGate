
import PropTypes from 'prop-types';

const CollegesCard = ({ college }) => {

  return (
    <div className="card border border-slate-700 bg-slate-800  max-w-[400px] shadow-xl m-4">
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
        <p><strong>Admission Dates:</strong> {college.admissionDates}</p>
        <p><strong>Events:</strong> {college.events}</p>
        <p><strong>Research History:</strong> {college.researchHistory}</p>
        <p><strong>Sports:</strong> {college.sports}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-outline btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

CollegesCard.propTypes = {
  college: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    admissionDates: PropTypes.string.isRequired,
    events: PropTypes.string.isRequired,
    researchHistory: PropTypes.string.isRequired,
    sports: PropTypes.string.isRequired,
  }).isRequired,
};


export default CollegesCard;