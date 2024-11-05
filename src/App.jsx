import { useEffect } from 'react';
import { useState } from 'react';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';

const url = 'https://www.course-api.com/react-tabs-project';
// https://www.course-api.com/react-tabs-project
const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  const setCurrent = (index) => {
    if (index === 3) setCurrentItem(0);
    if (index === 2) setCurrentItem(1);
    if (index === 1) setCurrentItem(2);
  };

  const fetchJobs = async () => {
    isLoading;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Probably an error code 4xx or 5xx!');

      const data = await res.json();
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading)
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );

  return (
    <section className="jobs-center">
      <BtnContainer jobs={jobs} setCurrent={setCurrent} />
      {/* <div className="loading"></div> */}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
