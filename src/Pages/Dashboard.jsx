import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { get_applications, get_data, get_jobs, latest_jobs } from '../Utils/services'
import './Css/Dashboard.css'
import Recommended from '../Components/Recommended'
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode"; 
import { loginContext } from '../App'
import Application from '../Components/Application'

function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useContext(loginContext);
  const [applications, setApplications] = useState([]);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [jobsPosted, setJobsPosted] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (get_data()) {
          setUser(jwt_decode(get_data()));

          const jobsResponse = await latest_jobs();
          if (jobsResponse.status === 200) {
            setJobs(jobsResponse.data);
          } else {
            console.error('Error fetching latest jobs:', jobsResponse.statusText);
          }

          if (jwt_decode(get_data()).company) {
            const jobsPostedResponse = await get_jobs();
            if (jobsPostedResponse.status === 200) {
              setJobsPosted(jobsPostedResponse.data);
            } else {
              console.error('Error fetching jobsPosted:', jobsPostedResponse.statusText);
            }
          } else {
            const applicationsResponse = await get_applications();
            if (applicationsResponse.status === 200) {
              setApplications(applicationsResponse.data);
            } else {
              console.error('Error fetching applications:', applicationsResponse.statusText);
            }
          }
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
        // Handle generic errors here
      }
    };

    fetchData();
  }, []);
  return (
    <div>
        <Header/>
        <div className='row p-3 p-lg-5 ml-lg-5'>
            <div className='col-lg-8 d-flex flex-column align-items-start'>
                <p className='mb-0'>Welcome Back !!</p>
                <p className='accountName'>{user?user.name:''}</p>

                <div className='d-flex mx-2 mx-lg-0 mb-4 mb-lg-1' style={{width: '100%'}}>
                    <input type='text' className='searchBox' placeholder='Search' />
                    <button className='searchBtn ml-2'><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            <div className='col-lg-4 d-flex flex-column align-items-center'>
                <div className='d-flex'>
                    <div className='dashdiv mr-3'><i class="fa-regular fa-comments mr-1"></i> Chat</div>
                    <div className='dashdiv '><i class="fa-sharp fa-regular fa-newspaper mr-1"></i> News</div>
                </div>
                <div className='d-flex'>
                    <div className='dashdiv mr-3 mt-3'><i class="fa-sharp fa-solid fa-file"></i> Resume</div>
                    <div className='dashdiv mt-3'><i class="fa-solid fa-gear"></i></div>
                </div>
                <div className='d-flex'>
                    <div className='dashdiv mr-3 mt-3'><i class="fa-solid fa-clock-rotate-left mr-1"></i> History</div>
                    <div className='dashdiv mt-3'><i class="fa-solid fa-bell mr-1"></i> Alerts</div>
                </div>
            </div>
        </div>

        {jobs && jobs.length > 0 && (
        <div className='p-3 p-lg-5 ml-lg-5'>
          <h2>New Jobs</h2>
          <div className='d-flex newjobs'>
            {jobs.map((job) => (
              <Recommended
                key={job.id} // Add a unique key
                title={job.title}
                setShow={setShow}
                setData={setData}
                location={job.location}
                company={job.company.name}
                salary={job.salary}
              />
            ))}
          </div>
        </div>
      )}

      {/* Application Modal */}
      {show && <Application setShow={setShow} data={data} />}

      {/* My Applications or My Jobs */}
      {user &&
        ((user.company && jobsPosted && jobsPosted.jobs_posted.length > 0) ||
          (!user.company && applications && applications.applications.length > 0)) && (
          <div className='p-3 p-lg-5 ml-lg-5'>
            <h2>{user.company ? 'My Jobs' : 'My Applications'}</h2>
            <div className='d-flex newjobs'>
              {user.company
                ? jobsPosted.jobs_posted.map((job) => (
                    <Recommended
                      key={job.id} // Add a unique key
                      title={job.title}
                      setShow={setShow}
                      setData={setData}
                      location={job.location}
                      company={job.company.name}
                      salary={job.salary}
                    />
                  ))
                : applications.applications.map((application) => (
                    <Recommended
                      key={application.id} // Add a unique key
                      title={application.applying_for.title}
                      setShow={setShow}
                      setData={setData}
                      location={application.applying_for.location}
                      company={application.applying_for.company.name}
                      salary={application.applying_for.salary}
                    />
                  ))}
            </div>
          </div>
        )}

      <Footer />
    </div>
  );
}

export default Dashboard