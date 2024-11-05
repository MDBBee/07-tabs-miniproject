function BtnContainer({ jobs, setCurrent, currentItem }) {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => (
        <button
          key={job.id}
          className={index === currentItem ? 'job-btn  active-btn' : 'job-btn'}
          onClick={() => setCurrent(index)}
        >
          {job.company}
        </button>
      ))}
    </div>
  );
}
export default BtnContainer;
