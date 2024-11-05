function BtnContainer({ jobs, setCurrent }) {
  return (
    <div className="btn-container">
      {jobs.map((job) => (
        <button
          key={job.id}
          className="job-btn"
          onClick={() => setCurrent(job.order)}
        >
          {job.company}
        </button>
      ))}
    </div>
  );
}
export default BtnContainer;
